const config = require('./config.json'); // Подключаем файл с параметрами и информацией
const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const prefix = config.prefix; // «Вытаскиваем» префикс

// Admin actions
const ban = require('./commands/admin/ban');
const clear = require('./commands/admin/clear');

// Fun actions
const auf = require('./commands/fun/auf');
const flip = require('./commands/fun/heads_or_tails');
const waifu = require('./commands/fun/looking_for_waifu');
const gif = require('./commands/fun/gif');

// Music actions
//const music = require('./commands/music/music');
const play = require('./commands/music/music');
const skip = require('./commands/music/music');
const stop = require('./commands/music/music');

// Samurai actions
const busido = require('./commands/samurai/busido');

// Social actions
const bite = require('./commands/social/bite');
const hit = require('./commands/social/hit');
const hug = require('./commands/social/hug');
const kiss = require('./commands/social/kiss');
const poke = require('./commands/social/poke');
const slap = require('./commands/social/slap');

// Команды //

function introducing(robot, msg) {

    const introducingEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Clatcher Jr')
	.setDescription('Здравствуй! Меня зовут Clatcher Младший и я помогаю своему сюзерену - Clatcher`у Старшему в его делах. Я умею обращаться с катаной, петь песни и неплохо разбираюсь в женщинах!')
	.setThumbnail('https://i.imgur.com/Gcfmh04.png')
	.addFields(
		{ name: 'Команды', value: 'Здесь ты можешь посмотреть всё, что я умею:' },
        { name: ':black_joker: Развлекательные действия', value: 'Just for fun ' },
		{ name: '-waifu', value: 'Используй, чтоб найти для себя Вайфу :smirk:', inline: true },
		{ name: '-flip', value: 'Используй, чтоб подбросить монетку', inline: true },
		{ name: '-auf', value: 'Используй, чтоб прочитать цитату дня', inline: true },
        { name: ':notes: Музыкальные действия', value: 'Для сюзерена ' },
		{ name: '-sing', value: 'В скором времени я научусь петь', inline: true },
		{ name: '-play', value: 'Включить музыку', inline: true },
		{ name: '-skip', value: 'Пропустить песню', inline: true },
		{ name: '-stop', value: 'Выключить музыку ', inline: true },
		{ name: '-pause', value: 'Поставить песню на паузу (пока не работает)', inline: true },
        { name: ':japanese_ogre: Самурайские действия', value: 'Для истинных воинов ' },
		{ name: '-katana', value: 'Скоро я буду демонстрировать свои навыки.', inline: true },
		{ name: '-busido', value: 'Используй, чтоб узнать больше правил из Кодекса Самурая!', inline: true },
        { name: ':heart: Админские действия', value: 'Для сюзерена ' },
		{ name: '-ban', value: 'В скором времени я научусь банить пользователей', inline: true },
		{ name: '-clear n', value: 'Используй, чтоб удалить последние n сообщений в чате (не больше 100 за раз)', inline: true },
        { name: ':smirk: Социальные действия', value: 'Для истинных социальщиков ' },
		{ name: '-hug', value: 'Используй, чтоб обнять кого-нибудь на сервере.', inline: true },
		{ name: '-kiss', value: 'Используй, чтоб поцеловать кого-нибудь на сервере', inline: true },
		{ name: '-bite', value: 'Используй, чтоб укусить кого-нибудь на сервере', inline: true },
		{ name: '-slap', value: 'Используй, чтоб шлёпнуть кого-нибудь на сервере', inline: true },
		{ name: '-hit', value: 'Используй, чтоб ударить кого-нибудь на сервере', inline: true },
		{ name: '-poke', value: 'Используй, чтоб обратить чьё-то внимание на себя', inline: true }
	)
	.setFooter('© 2021 by the best girl ever - Anastasia');

    msg.channel.send(introducingEmbed);
}

function female() {
    //Игра на что я обиделась
}

// Список команд //

var commands_list = [
{
    name: "introduce",
    out: introducing,
    about: "Выписывает доступные команды и небольшое описание бота."
},
{
    name: "flip",
    out: flip,
    about: "Игра 'Орёл или Решка', подбрасывает монетку и выдаёт результат."
},
{
    name: "clear",
    out: clear,
    about: "Удаляет определённое количество сообщений в канале, где был вызвана (не больше 100)."
},
{
    name: "waifu",
    out: waifu,
    about: "Ищет гифку подходящей waifu, для вызвавшего её пользователя."
},
{
    name: "ban",
    out: ban,
    about: "Банит определённого пользователя."
},
{
    name: "busido",
    out: busido,
    about: "Выписывает одно из правил из Кодекса правил самураев 'Пути самурая'."
},
{
    name: "hug",
    out: hug,
    about: "Обнимает определённого пользователя."
},
{
    name: "kiss",
    out: kiss,
    about: "Целует определённого пользователя."
},
{
    name: "slap",
    out: slap,
    about: "Шлёпает определённого пользователя."
},
{
    name: "bite",
    out: bite,
    about: "Кусает определённого пользователя."
},
{
    name: "hit",
    out: hit,
    about: "Ударяет определённого пользователя."
},
{
    name: "poke",
    out: poke,
    about: "Тыкает определённого пользователя."
},
{
    name: "female",
    out: female,
    about: "Особый статус в обществе."
},
{
    name: "auf",
    out: auf,
    about: "Выписывает гениальные цитаты на каждый день."
},
{
    name: "gif",
    out: gif,
    about: "Высылает гиф на запрошенную тему."
},
{
    name: "play",
    out: play,
    about: "Включает музыку по заданной ссылке (либо по ключевым словам)."
},
{
    name: "skip",
    out: skip,
    about: "Пролистывает на следующую песню."
},
{
    name: "stop",
    out: stop,
    about: "Выключает музыкального бота."
}
];

// Name - название команды, на которую будет реагировать бот
// Out - название функции с командой
// About - описание команды 

module.exports.comms = commands_list;