exports.config = {
  name: "okşa",
  aliases: [],
  description: 'Eitketlediğiniz Kişiyi Okşarsınız',
  usage: "Okşa",
  async run (client, message, args) {
    const Discord = require('discord.js');
    const { JsonDatabase } = require("wio.db");
    const db = new JsonDatabase("myDatabase");
    const ayarlar = require('../../ayarlar.json')
                    let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

    
  try {
    let member = message.mentions.members.first();

    require('request')({url: 'https://nekos.life/api/pat', json: true}, (req, res, json) => {
      if (member) {
        let embed = new Discord.MessageEmbed()
        .setTitle(message.author.username +" " + member.user.username+ ' Adlı kullanıcıyı okşuyor!')
        .setColor('#ff0000')
        .setImage(json.url);

        message.channel.send(embed);
      } else message.reply('Okşamak istediğin kullanıcıyı etiketlemelisin!');
    });
  } catch (err) {
    message.channel.send('Hata!\n' + err).catch();
  }
}
}