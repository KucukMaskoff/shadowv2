exports.config = {
  name: "sa-as",
  aliases: [],
  description: 'sa-as Sistemini Açarsınız',
  usage: "Sa-As",
  async run (client, message, args) {
    const Discord = require('discord.js');
    const { JsonDatabase } = require("wio.db");
    const db = new JsonDatabase("myDatabase")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setDescription(`❌<@${message.author.id}>, Bu komutu kullanmak için \`Mesajları Yönet\` iznine sahip olmalısın. ❌`));
  if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription('⛔ **Sa-As ayarlamak için;** `s!sa-as aç ya da kapat` ⛔'))
  
  if (args[0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'açık')
    message.channel.send(new Discord.MessageEmbed().setDescription(`**Başarıyla SA-AS açtınız, artık bot \`sa\` yazıldığında otomatik \`Aleyküm Selam\` diyecek.**`))
    
  }
  if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapalı')
    message.channel.send(new Discord.MessageEmbed().setDescription(`**Başarıyla SA-AS kapattınız, artık bot \`sa\` yazıldığında cevap vermeyecek.**`))
  }
}
}