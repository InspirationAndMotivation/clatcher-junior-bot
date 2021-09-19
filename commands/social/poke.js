module.exports = function (robot, msg, args) {
    const user = msg.mentions.users.first(); // Возьмёт первого упомянутого пользователя
    const bot_channel = msg.member.guild.channels.cache.find(channel => channel.name === "clatcher-junior-bot");
  
    const poke_list = [
        " потрогал(-а) за плечо ",
        " зазывающе помахал(-а) ",
        " легонько тыкнул(-а) пальцем в пузико ",
        " поманил(-а) пальчиком ",
        " громко окликнул(-а) ",
        " посвистел(-а), подзывая ",
        " пытается обратить на себя внимание "
    ];
    let id = msg.author.id;
    
    if (user == undefined) {
        msg.reply(`<@${id}> бесстыдно трогает сам себя :flushed:`);
    } else {
        let random = Math.floor(Math.random() * poke_list.length); 
        
        //msg.channel.send(`<@${id}> ` + poke_list[random] + `${user}`);
        bot_channel.send(`<@${id}> ` + poke_list[random] + `${user}`);
    }
}