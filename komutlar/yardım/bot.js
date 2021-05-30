exports.config = {
  name: "bot",
  aliases: [],
  description: 'Bot Yardım Listesini Görürsünüz',
  usage: "Bot",
  async run (client, message, args) {
    const Discord = require("discord.js");
  const YardımEmbed = new Discord.MessageEmbed()
    .setDescription(`
**Bot Komutu Listesi**
**ping**
\`Botun Pingini Gösterir\`
**öneri**
\`Bot Hakkında Öneride Bulunursunuz\`
**prefix**
\`Botun Prefixini Değiştirirsiniz\`
**istatistik**
\`Botun İstatistiklerini Görürsünüz\`
**komut-sayısı**
\`Botta Toplam Kaç Komut Olduğunu Gösterir\`
**web**
\`Botun Web Sitesini Gösterir\`
**davet**
\`Bot Davet Linkini Atar\`
**güncellemeler**
\`Bota Güncelleme Geldiğinde Buradan Kolaylıkla Göreceksiniz\`
**[Destek Sunucusu](https://discord.gg/2aa4wJECEx)** **•** **[Davet Linki](https://discord.com/oauth2/authorize?client_id=814948557009453096&scope=bot&permissions=805314622)**`)
    .setImage(`https://media.discordapp.net/attachments/841457443119956018/842027109274877962/standard.gif`)
    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(YardımEmbed).then;
}
}