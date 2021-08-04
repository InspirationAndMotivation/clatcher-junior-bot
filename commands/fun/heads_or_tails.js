module.exports = function (robot, msg, args) {
    const bot_channel = msg.member.guild.channels.cache.find(channel => channel.name === "clatcher-junior-bot");
    bot_channel.send('Монета подбрасывается...');

    var random = Math.floor(Math.random() * 4) + 1; // Объявление переменной random - она вычисляет случайное число от 1 до 3

    if (random == 1) { // Если вычислено число 1, то выпадает орёл.
        bot_channel.send(':full_moon: Орёл!')
    } else if (random == 2) { // Если вычислено число 2, то выпадает решка.
        bot_channel.send(':new_moon: Решка!')
    } else { // Если вычислено число 3, то монета падает ребром.
        bot_channel.send(':last_quarter_moon: Монета упала ребром!')
    }
}