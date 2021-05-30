exports.config = {
  name: "komut-sayısı",
  aliases: [],
  description: 'Botta Kaç Komut Olduğunu Görürsünüz',
  usage: "Komut-Sayısı",
  async run (client, message, args) {
    const Discord = require("discord.js");
    const komutsayı = new Discord.MessageEmbed()
    .setTitle(`Shadow Chasters Komut Sayısı`)
    .setDescription('**\nShadow Chastersda Toplam**  **' + client.commands.size + '** **Komut Vardır!**')
    .setColor("#ff0000")
    .setTimestamp()
    .setFooter(message.author.username , message.author.avatarURL)
    message.channel.send(komutsayı);
  }
}