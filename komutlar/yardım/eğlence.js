exports.config = {
  name: "eğlence",
  aliases: [],
  description: 'Eğlence Yardım Listesini Görürsünüz',
  usage: "Eğlence",
  async run (client, message, args) {
    const Discord = require("discord.js");
  const YardımEmbed = new Discord.MessageEmbed()

    .setDescription(`
**Eğlence Komutu Listesi**
**balık-tut**
\`Balık Tutarsınız\`
**okşa**
\`Etiketlediğiniz Kişiyi Okşarsınız\`
**kediler-hakkında**
\`Kediler Hakkında Bilgi Alırsınız\`
**adamasmaca**
\`Adam Asmaca Oynarsınız\`
**oyuncu-ara**
\`Oyuncu Ararsınız\`
**xox**
\`Xox Oynarsınız\`
**[Destek Sunucusu](https://discord.gg/2aa4wJECEx)** **•** **[Davet Linki](https://discord.com/oauth2/authorize?client_id=814948557009453096&scope=bot&permissions=805314622)**`)
    .setImage(`https://media.discordapp.net/attachments/841457443119956018/842027109274877962/standard.gif`)
    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(YardımEmbed).then;
}
}