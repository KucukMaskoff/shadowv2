exports.config = {
  name: "moderasyon",
  aliases: [],
  description: 'Moderasyon Yardım Listesini Görürsünüz',
  usage: "Moderasyon",
  async run (client, message, args) {
    const Discord = require("discord.js");
    const YardımEmbed = new Discord.MessageEmbed()
    .setDescription(`
**Moderasyon Komutu Listesi**
**nuke**
\`Komutu Kullandığınız Kanala Nuke Atarsınız\`
**sil**
\`Belirttiğiniz Rakam Kadar Mesaj Silersiniz\`
**kick**
\`Belirttiğiniz Kullanıcıya Kick Atarsınız\`
**ban**
\`Belirttiğiniz Kullanıcıya Kick Atarsınız\`
**yasak-listesi**
\`Sunucudan Yasaklı Kişileri Listeler\`
**slowmode**
\`Komutu Kullandığınız Kanalda Yavaş Modu Açarsınız\`
**yetkilerim**
\`Sunucu İçerisindeki Yetkilerinizi Görürsünüz\`
**[Destek Sunucusu](https://discord.gg/2aa4wJECEx)** **•** **[Davet Linki](https://discord.com/oauth2/authorize?client_id=814948557009453096&scope=bot&permissions=805314622)**`)
    .setImage(`https://media.discordapp.net/attachments/840179613635182642/842807225009045514/standard_1.gif`)
    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(YardımEmbed).then;
}
}