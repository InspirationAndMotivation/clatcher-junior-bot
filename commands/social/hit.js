module.exports = function (robot, msg, args) {
    const user = msg.mentions.users.first(); // Возьмёт первого упомянутого пользователя
    const bot_channel = msg.member.guild.channels.cache.find(channel => channel.name === "clatcher-junior-bot");
  
    const hit_list = [
        " сжав руку в кулак, выполнил(-а) левый апперкот в подбородок ",
        " нанес(-ла) сильный удар в правый глаз, оставив синяк ",
        " возмущенно дал(-а) пощёчину ",
        " ударил ногой "
    ];
    let id = msg.author.id;
    
    if (user == undefined) {
        msg.reply(`Прежде, чем драться, выбери себе достойного противника!`);
    } else {
        let random = Math.floor(Math.random() * hit_list.length); 
        //msg.channel.send(`<@${id}> ` + hit_list[random] + `${user}`);
        bot_channel.send(`<@${id}> ` + hit_list[random] + `${user}`);
    }
}