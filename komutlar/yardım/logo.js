exports.config = {
  name: "logo",
  aliases: [],
  description: 'Logo Yardım Listesini Görürsünüz',
  usage: "Logo",
  async run (client, message, args) {
    const Discord = require("discord.js");
    const YardımEmbed = new Discord.MessageEmbed()
    .setDescription(`
**Logo Komut Listesi**
**alev**
\`Yazdığınız Yazıyı Alev Logoyla Değiştirir\`
**alev2**
\`Yazdığınız Yazıyı 2. Alevli Logoyla Değiştirir\`
**altın**
\`Yazdığınız Yazıyı Altın Logoyla Değiştirir\`
**anime**
\`Yazdığınız Yazıyı Anime Logoyla Değiştirir\`
**cool**
\`Yazdığınız Yazıyı Cool Logoyla Değiştirir\`
**gold**
\`Yazdığınız Yazıyı Gold Logoyla Değiştirir\`
**goole**
\`Yazdığınız Yazıyı Google Logoyla Değiştirir\`
**gökkuşağı**
\`Yazdığınız Yazıyı Gökkuşağı Logoyla Değiştirir\`
**neon**
\`Yazdığınız Yazıyı Neon Logoyla Değiştirir\`
**odun**
\`Yazdığınız Yazıyı Odun Logoyla Değiştirir\`
**pembe**
\`Yazdığınız Yazıyı Pembe Logoyla Değiştirir\`
**[Destek Sunucusu](https://discord.gg/2aa4wJECEx)** **•** **[Davet Linki](https://discord.com/oauth2/authorize?client_id=814948557009453096&scope=bot&permissions=805314622)**`)
    .setImage(`https://media.discordapp.net/attachments/840179613635182642/842807225009045514/standard_1.gif`)
    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(YardımEmbed).then;
}
}