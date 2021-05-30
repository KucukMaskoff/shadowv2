exports.config = {
  name: "prefix",
  aliases: [],
  description: 'Botun Prefix (Ön Ek)ini Değiştirirsiniz',
  usage: "Prefix",
  async run (client, message, args) {
    const Discord = require('discord.js');
    const { JsonDatabase } = require("wio.db");
    const db = new JsonDatabase("myDatabase");
    const ayarlar = require('../../ayarlar.json')
  let preffix = db.fetch(`prefix_${message.guild.id}`)
   if(!args[0]) return message.reply(`Bu sunucudaki prefixim: **${preffix ? preffix : ayarlar.prefix}** \n Prefixi Değiştirmek veya Sıfırlamak İçin **( ayarla / sıfırla )**`)
    if(args[0] == "sıfırla" || args[0] =="reset") {
    if(!preffix) {
      return message.reply(`Ayarlanmayan şeyi sıfırlayamazsın.`)
    } else {
    db.delete(`prefix_${message.guild.id}`)
    return  message.reply(`Prefix başarıyla sıfırlandı. Prefix artık **${ayarlar.prefix}**`)
    }
  }
  
  
  if(args[0] === "ayarla" || args[0] == "set") {
      if(!args[1]) return message.reply("Bir Prefix Değeri Giriniz")

    if(preffix) {
        return message.reply(`Ayarlanan şeyi tekrar ayarlayamazsın.`)
      } else {
      if(args[1].lenght > 5) return message.channel.send(`Prefixi 5 harften büyük yapamazsın`)
      db.set(`prefix_${message.guild.id}`, args[1])
      message.reply(`Prefix başarıyla **${args[1]}** olarak ayarlandı.\n${args[1]}prefix sıfırla yazarak prefixi sıfırlayabilirsiniz.`)
      }
    }
  }
}