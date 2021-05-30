exports.config = {
  name: "gif",
  aliases: [],
  description: 'Gif Yardım Listesini Görürsünüz',
  usage: "Gif",
  async run (client, message, args) {
    const Discord = require("discord.js");
  const YardımEmbed = new Discord.MessageEmbed()

    .setDescription(`
**gif-ara**
\`Gif Ararsınız\`
**anime-gif**
\`Rasgele Anime Giflerini Görürsünüz\`
**baby-gif**
\`Rasgele Bebek Giflerini Görürsünüz\`
**hayvan-gif**
\`Rasgele Havyan Giflerini Görürsünüz\`
**man-gif**
\`Rasgele Erkek Giflerini Görürsünüz\`
**woman-gif**
\`Rasgele Kadın Giflerini Görürsünüz\`
**[Destek Sunucusu](https://discord.gg/2aa4wJECEx)** **•** **[Davet Linki](https://discord.com/oauth2/authorize?client_id=814948557009453096&scope=bot&permissions=805314622)**`)
    .setImage(`https://media.discordapp.net/attachments/840179613635182642/842807225009045514/standard_1.gif`)
    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(YardımEmbed).then;
}
}