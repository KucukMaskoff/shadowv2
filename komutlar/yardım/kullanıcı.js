exports.config = {
  name: "Kullanıcı",
  aliases: [],
  description: 'Kullanıcı Yardım Listesini Görürsünüz',
  usage: "Kullanıcı",
  async run (client, message, args) {
    const Discord = require("discord.js");
  const YardımEmbed = new Discord.MessageEmbed()

    .setDescription(`
**Kullanıcı Komutu Listesi**
**avatar**
\`Kişinin Avatarını Görürsünüz\`
**afk**
\`Afk Olursunuz\`
**üyedurum**
\`Toplam Kullanıcı Sayısınız Vs. Gösterir\`
**sa-as**
\`Sa As Sistemini Açarsınız\`
**oylama**
\`Oylama Başlatırsınız\`
**bitcoin**
\`Ülkelerin Bitcoin Değerlerini Gösterir\`
**roblox-oyuncu-ara**
\`Roblox Adını Yazdığınız Oyuncunun Detaylarını Görürsünüz\`
**nick**
\`Etiketlediğiniz Kişinin İsmini Değiştirirsiniz\`
**çek**
\`Etiketlediğiniz Kişiyi Yanınıza Çekersiniz\`
**roller**
\`Sunucudaki Rolleri Sıralar\`
**[Destek Sunucusu](https://discord.gg/2aa4wJECEx)** **•** **[Davet Linki](https://discord.com/oauth2/authorize?client_id=814948557009453096&scope=bot&permissions=805314622)**`)
    .setImage(`https://media.discordapp.net/attachments/840179613635182642/842807225009045514/standard_1.gif`)
    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(YardımEmbed).then;
}
}