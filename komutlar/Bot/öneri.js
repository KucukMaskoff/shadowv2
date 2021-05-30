exports.config = {
  name: "öneri",
  aliases: [],
  description: 'Bota Öneride Bulunursunuz',
  usage: "Öneri",
  async run (client, message, args) {
    const Discord = require("discord.js");
  var öneri = args.slice(0).join(" ");
  var channelID = "820346763680546896";
  if (!öneri) return message.reply("Bir mesaj belirtin! Doğru kullanım: **s!öneri/s!önerim**");
    var embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor("PURPLE")
      .addField("Eylem:", "Öneri")
      .addField("Kullanıcı:", message.author.tag)
      .addField("ID", message.author.id)
      .addField("Öneri", öneri);
    client.channels.cache.get(channelID).send(embed);
    message.delete() 
    message.channel.send("Öneriniz alınmıştır! Teşekkür ederiz...");
  }
}