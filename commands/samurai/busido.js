module.exports = function (robot, msg, args) {
    const bot_channel = msg.member.guild.channels.cache.find(channel => channel.name === "clatcher-junior-bot");

    let busido_list = [
        "Бусидо (в переводе «путь воина») — самурайский кодекс, набор законов," +
        "требований и правил поведения настоящего мужчины в обществе, в сражении и в одиночестве.",
        "Прежде чем выразить человеку свое мнение, подумай о том, в состоянии ли он его принять.",
        "Совершив ошибку, нужно тут же ее исправить. Если это сделать без промедления, она скоро будет забыта.",
        "Тот, кто пьяным хватается за меч, проявляет не только безрассудство, но и трусость.",
        "Самурай должен избегать большого количества сакэ, чрезмерной гордости и великой роскоши.",
        "Спрашивать, когда знаешь, означает поступать вежливо. Спрашивать, когда не знаешь, абсолютно необходимо.",
        "Когда сталкиваешься с неудачами и трудностями, недостаточно просто не беспокоиться. Когда сталкиваешься с " +
        "трудностями, нужно смело и радостно бросаться вперед.",
        "Человек ничего не стоит, если он не понимает, что «сейчас» и «то самое время» — это одно и то же.",
        "Приниматься нужно только за то, что можно закончить в течение одного дня. Завтра тоже будет только один день.",
        "Воистину нет ничего, кроме подлинной цели настоящего мгновения. Вся жизнь человека есть последовательность мгновений.",
        "Следует взвешивать каждое слово и неизменно задавать себе вопрос, правда ли то, что собираешься сказать.",
        "Обучение делает умного от природы еще умнее, а глупого от природы — не столь безнадежным.",
        "Человеку не дано понять то, насколько он может ошибаться в ошибках других или не понимать их.",
        "Если ты уразумеешь одно дело — тебе откроются восемь других.",
        "Одного слова достаточно, чтобы заявить о своей силе или малодушии.",
        "То, что называют щедростью, на самом деле есть сострадание.",
        "Не следует быть бесцеремонным с человеком, который пришел к тебе, даже если ты занят.",
        "Настоящая смелость заключается в том, чтобы жить, когда нужно жить, и умереть, когда нужно умереть.",
        "Самурай обязан быть не только безупречным сыном, но и преданным своему господину." +
        " Он не предаст сюзерена даже если количество его подданных уменьшится со ста до десяти и с десяти до одного.",
        "В битве преданность самурая выражается в том, чтобы без испуга идти на копья и стрелы врага, навстречу смерти, если таков зов долга.",
        "Преданность, честнось и храбрость — три главных качества самурая.",
        "Сокол не клюет брошенные зёрна, даже если давно ничего не ел. Подобно ему и самурай обязан показывать, что сыт, даже если умирает от голода.",
        "Если самурай проиграл сражение и ему грозит смерть, ему нужно торжественно произнести своё имя и умереть улыбаясь, без позорной спешки.",
        "Если рана самурая смертельна, самураю нужно с почтением попрощаться со старшим по положению и безмятежно умереть.",
        "Имеющий только физическую силу не заслуживает титула самурая. Кроме потребности в освоении наук, самурай должен расходовать свободное время на поэзию и изучение чайной церемонии.",
        "Не позволяй другим превзойти себя на пути самурая.",
        "Не осознав, кто ты есть, невозможно стать самураем.",
        "Если поведение жены самурая каким-то образом раздражает его, самое разумное — это объяснить ей, что правильно, а что — нет. Если проступок ее незначителен, благоразумно простить ее и быть терпеливым.",
        "Только трусливый и малодушный человек может размахивать перед женщиной мечом, бить ее и оскорблять.",
        "Если самурай, считая женщину своей женой, повышает голос, ругает и оскорбляет ту, кого люди почтительно называют супругой, то он ведет себя точно так же, как нищие поденщики, живущие на задворках городов и деревень.",
        "Если сам не плетешь интриг, то их непременно плетут против тебя, если не подличаешь, то с тобой обращаются подло.",
        "Мужского честолюбия не удержать в силках из женских волос",
        "Бесполезное унижение унижает самого унижающего",
        "Лишь тот, кто вечно подвергается издевательствам и побоям, способен оценить человеческую доброту",
        "Смерть не страшна, вопрос в том, как суждено умереть",
        "Ложка хороша к обеду"
    ]
    let random = Math.floor(Math.random() * busido_list.length); 

    
    bot_channel.send(busido_list[random]); 
}