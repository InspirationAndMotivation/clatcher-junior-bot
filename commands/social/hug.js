module.exports = function (robot, msg, args) {
    const user = msg.mentions.users.first(); // Возьмёт первого упомянутого 
    const hug_list = [
        " неловко приобнял(-а) за плечи ",
        " крепко сжал(-а) в своих объятиях ",
        " подтянул(-а) к себе, чтоб обнять ",
        " заключил(-а) в тёплые объятия ",
        " грубо обнял(-а), прижав к своему телу "
    ];
    let id = msg.author.id;

    if (user == undefined) {
        msg.channel.send(`Clatcher Jr с любовью обнял <@${id}>, прижимая к своему самурайскому сердечку.`);
    } else {
        let random = Math.floor(Math.random() * hug_list.length); 
        msg.channel.send(`<@${id}> ` + hug_list[random] + `${user}`);
    }
}