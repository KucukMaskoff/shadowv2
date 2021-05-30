exports.config = {
  name: "gif-ara",
  aliases: [],
  description: 'Gif Ararsınız',
  usage: "Gif-Ara",
  async run (client, message, args) {
    const Discord = require("discord.js");
    const request = require('request-promise-native');
try {
if (args.length < 1) {
const embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setDescription("**Doğru Kullanım:** s!gif-ara <aranacak gif>");
return message.channel.send(embed);     
}
let options = {
url: 'http://api.giphy.com/v1/gifs/search',
qs: {
q: encodeURI(args.join('+')),
api_key: 'dc6zaTOxFJmzC',
limit: 10,
offset: 0
},
json: true
};
let response = await request(options);
if (response.data.length) {
const embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setDescription(`Gif Aranıyor: ${args.join(' ')}`.slice(0, 256))
.setImage(response.data[Math.floor(Math.random() * response.data.length)].images.original.url)
return message.channel.send(embed);
}
else {
return Bastion.emit('Hata', '', Bastion.i18n.error(message.guild.language, 'Bulunamadı', 'Görsel'), message.channel);
}
}
catch (e) {
if (e.response) {
return Bastion.emit('Hata', e.response.statusCode, e.response.statusMessage, message.channel);
}
console.log(e);
}
}
}