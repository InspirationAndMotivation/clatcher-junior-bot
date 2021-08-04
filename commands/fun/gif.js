const config = require('../../config.json');
const fetch = require('node-fetch');
const tenorAPI = config['tenor-api-key']; 

module.exports = async function (robot, msg, args) {
    const bot_channel = msg.member.guild.channels.cache.find(channel => channel.name === "clatcher-junior-bot");
    let keywords = 'magic';
    if (args.length > 1) {
        keywords = args.slice(1, args.length).join(" ");
    }
    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${tenorAPI}&contentfilter=off`;
    let response = await fetch(url);
    let json = await response.json();
    let random = Math.floor(Math.random() * json.results.length); 
    bot_channel.send(json.results[random].url); 
}
