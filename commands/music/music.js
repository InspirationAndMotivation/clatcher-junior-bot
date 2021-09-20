const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

const queue = new Map();

module.exports = async function (robot, msg, args) {
    const voice_channel = msg.member.voice.channel;
    const permissions = voice_channel.permissionsFor(msg.client.user);
    const server_queue = queue.get(msg.guild.id);    
    const bot_channel = msg.member.guild.channels.cache.find(channel => channel.name === "clatcher-junior-bot");

    if (args[0] == "-play") {
        if (!permissions.has("CONNECT")) {
            return bot_channel.send("Сюзерен не разрешает мне выходить к людям.. Попросите его дать мне права на это.");
        }
        if (!permissions.has("SPEAK")) {
            return bot_channel.send("Сюзерен не разрешает мне петь.. Попросите его дать мне права на это.");
        }

        if (args.length < 3)
            return bot_channel.send('Вы не указали какую песню Вам спеть!');
        
        let song = {};
        if (ytdl.validateURL(args[1])) {
            const song_info = await ytdl.getInfo(args[1]);
            song = { title: song_info.videoDetails.title, media: song_info.videoDetails.media, url: song_info.videoDetails.video_url };
        } else {
            //Если у нас не URL, тогда ищем видео по ключевым словам
            const video_finder = async (query) => {
                const videoResult = await ytSearch(query);
                return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
            }

            const video = await video_finder(args.join(' '));
            if (video) {
                song = { title: video.title, url: video.url }
            } else {
                bot_channel.send('К сожалению, я не знаю такой песни...');
            }
        }

        if (!server_queue) {
            const queue_constructor = {
                voice_channel: voice_channel,
                text_channel: bot_channel,
                connection: null,
                songs: []
            }

            queue.set(msg.guild.id, queue_constructor);
            queue_constructor.songs.push(song);

            try {
                const connection = await voice_channel.join();
                queue_constructor.connection = connection;
                video_player(msg.guild, queue_constructor.songs[0]);
            } catch (err) {
                queue.delete(msg.guild.id);
                bot_channel.send('Произошла ошибка подключения.');
                throw err;
            }
        } else {
            server_queue.songs.push(song);
            return bot_channel.send(`Отлично! Эту песню я спою следующей: ${song.title}`);
        }
    } else if (args[0] == '-skip') {
        if(!msg.member.voice.channel) 
            return bot_channel.send('Я не слышу! Зайди в канал, чтоб использовать эту команду.');
        if(!server_queue) {
            return bot_channel.send('В очереди нет песен');
        }
        server_queue.connection.dispatcher.end();
    } else if (args[0] == '-stop') {
        if (!msg.member.voice.channel) 
            return bot_channel.send('Я не слышу! Зайди в канал, чтоб использовать эту команду.');
        server_queue.songs = [];
        server_queue.connection.dispatcher.end();
    } else if (args[0] == '-playlist') {
        if (server_queue === undefined) {
            bot_channel.send('Я пока ничего не пою...Используй команду, чтоб сказать мне что петь');
        } else {
            for (let i=0; i<server_queue.songs.length; i++) {
                let msg = (i+1) + `. ${server_queue.songs[i].title}`;
                if (i==0) msg = msg + ` **(пою сейчас)**`;
                if (i==1) msg = msg + ` **(буду петь следующей)**`;
                bot_channel.send(msg);
            }
        }
    } else if (args[0] == '-delete') {
        if (args[1] === undefined) {
            server_queue.songs.pop();
        } else if (args[1] < 0) {
            bot_channel.send('Это как это? Я нумерую от 1 до n...');
        } else {
            if (server_queue === undefined) {
                bot_channel.send('Я же молчал! Нельзя перестать петь, если не пел :thinking:');    
            }
            console.log(server_queue.songs.length);
            if (server_queue.songs.length > 1) {
                server_queue.songs.splice(args[1]-1, 1);
            } else {
                server_queue.songs = [];
                server_queue.connection.dispatcher.end();
            }
        }
    } else if (args[0] == '-pause') {
        //реализовать паузу
    }
}

const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);

    if (!song) {
        song_queue.voice_channel.leave();
        queue.delete(guild.id);
        return;
    }

    const stream = ytdl(song.url, { filter: 'audioonly' });
    song_queue.connection.play(stream, { seek: 0, volume: 0.5 })
        .on('finish', () => {
            song_queue.songs.shift();
            video_player(guild, song_queue.songs[0]);
        });
    await song_queue.text_channel.send(`Сейчас я пою ${song.title}`);
}
