module.exports = function (robot, msg, args) {
    const user = msg.mentions.users.first(); // Возьмёт первого упомянутого пользователя
    const bite_list = [
        " осторожно укусил(-а) за щеку ",
        " больно укусил(-а) за попу ",
        " приблизившись к шее, выпустил(-а) клыки и нежно прокусил(-а) кожу ",
        " стеснительно кусьнул(-а) носик ",
        " смело укусил(-а) за сосочек "
    ];
    let id = msg.author.id;

    if (user == undefined) {
        msg.channel.send(`Clatcher Jr, раскрыв рот, вгрызся белоснежными зубами в тело <@${id}>.`);
    } else {
        let random = Math.floor(Math.random() * bite_list.length); 
        msg.channel.send(`<@${id}> ` + bite_list[random] + `${user}`);
    }
}