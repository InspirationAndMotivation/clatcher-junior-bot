module.exports = function (robot, msg, args) {
    const user = msg.mentions.users.first(); // Возьмёт первого упомянутого пользователя
    const slap_list = [
        " игриво шлёпнул(-а) по попе ",
        " достал(-а) игрушки и принялась шлёпать ими по заднице ",
        " в воспитательных целях отшлёпал(-а) ремнём ",
        " уложил(-а) к себе на коленки и отшлёпал(-а) "
    ];
    let id = msg.author.id;

    if (user == undefined) {
        msg.channel.send(`Clatcher Jr неловко коснулся ладонью попки <@${id}>, скрывая смущение.`);
    } else {
        let random = Math.floor(Math.random() * slap_list.length); 
        msg.channel.send(`<@${id}> ` + slap_list[random] + `${user}`);
    }
}