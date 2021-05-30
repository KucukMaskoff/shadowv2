exports.config = {
  name: "ping",
  aliases: [],
  description: 'Botun Pingini Görürsünüz',
  usage: "Ping",
  async run (client, message, args) {
    const Discord = require("discord.js");
 if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
  const Crewembed = new Discord.MessageEmbed()
  .setTitle("Pingim!")
  .setColor("BLACK")
  .setDescription(`${client.ws.ping} ms`)
  message.channel.send(Crewembed)
  }
}