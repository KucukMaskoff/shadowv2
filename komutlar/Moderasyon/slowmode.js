exports.config = {
  name: "slowmode",
  aliases: [],
  description: 'Sohbete yazma sınır (süre) ekler. [1/100]',
  usage: 'Komutu Kullandığınız Kanalda SlowMode (yavaş modu) açarsınız',
  async run (client, message, args) {
    const discord = require("discord.js");
  const ayarlar = require('../ayarlar.json')
            let prefix = ayarlar.prefix


              if(message.channel.type == "dm")  return;
if (message.channel.type !== "text") return;
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanabilmen İçin **Mesajları Yönet** Yetkisine Sahip Olman Gerek!.");  

const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new discord.MessageEmbed()
                .setDescription(`Doğru kullanım: \`${prefix}yavaş-mod [0/100]\``)
                .setColor('RANDOM')
                .setTimestamp()
            message.channel.send({embed})
            return
          }
if (limit > 100) {
    return message.channel.send(new discord.MessageEmbed().setDescription("Süre limiti maksimum **100** saniye olabilir.").setColor('RED'));
}  
    message.channel.send(new discord.MessageEmbed().setDescription(`Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`).setColor('GREEN')).then(m => m.delete({ timeout: 5000, reason: 'Siliniyor.' }));
  
var request = require('request');
request({
    url: `https://discord.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
  })
}
}