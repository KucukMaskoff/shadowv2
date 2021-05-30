exports.config = {
  name: "sahip",
  aliases: [],
  description: 'Shaip Yardım Listesini Görürsünüz',
  usage: "Sahip",
  async run (client, message, args) {
    const Discord = require("discord.js");
  if(message.author.id !== "737034768591618141" && message.author.id !== "351008627726876692") return message.channel.send(`Sahip olda gel koçum`)
  const YardımEmbed = new Discord.MessageEmbed()

    .setDescription(`
**Sahip Komut Listesi**
**s!bakım**
\`Botu Bakım'a Alırsınız\`
**s!güncelleme**
\`Bota Güncelleme Duyurusu\`
**[Destek Sunucusu](https://discord.gg/2aa4wJECEx)** **•** **[Davet Linki](https://discord.com/oauth2/authorize?client_id=814948557009453096&scope=bot&permissions=805314622)**`)
    .setImage(`https://media.discordapp.net/attachments/840179613635182642/842807225009045514/standard_1.gif`)
    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(YardımEmbed).then;
}
}