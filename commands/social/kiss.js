module.exports = function (robot, msg, args) {
    const user = msg.mentions.users.first(); // Возьмёт первого упомянутого пользователя
    const bot_channel = msg.member.guild.channels.cache.find(channel => channel.name === "clatcher-junior-bot");
  
    const kiss_list = [
        " страстно впился(-ась) в губы ",
        " нежно поцеловал(-а) ",
        " принялся(-ась) укрывать поцелуями шею ",
        " неловко коснулся(-лась) губами щеки ",
        " грубо засосал(-а) "
    ];
    let id = msg.author.id;
    
    if (user == undefined) {
        //msg.channel.send(`Clatcher Jr, сложив губы трубочкой и закрыв глаза, потянулся к <@${id}>.`);
        bot_channel.send(`Clatcher Jr, сложив губы трубочкой и закрыв глаза, потянулся к <@${id}>.`);
    } else {
        let random = Math.floor(Math.random() * kiss_list.length); 
        //msg.channel.send(`<@${id}> ` + kiss_list[random] + `${user}`);
        bot_channel.send(`<@${id}> ` + kiss_list[random] + `${user}`);
    }
}