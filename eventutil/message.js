const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const { JsonDatabase } = require("wio.db");
const db = new JsonDatabase("myDatabase");
const ms = require("ms")
let talkedRecently = new Set();
module.exports = async message => {
let prefix = db.get(`prefix_${message.guild.id}`) || ayarlar.prefix
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if(db.get("bakım") && !ayarlar.sahip.includes(message.author.id)) {
    const embed = new Discord.MessageEmbed().setColor("GREEN").setAuthor(client.user.username, client.user.avatarURL())
.setDescription(`Sizlere daha iyi hizmet verebilmek için ${ms(Date.now() - db.get("bakım").date).replace("s", " Saniye").replace("m", " Dakika").replace("h", " Saat").replace("d", " Gün")}'dir çalışıyoruz.`)
.addField(`Bakım nedeni`, db.get("bakım").sebep)
.setFooter(`Desktek sunucumuza gelerek daha fazla bilgi alabilirsiniz.`)
 return message.channel.send(embed)
  }
    // let voted = await client.topgg_api.hasVoted(message.author.id)
    // if(voted === false) return message.channel.send(`bu komutu kullanmak için bota oy vermen gerek :D https://top.gg/bot/814948557009453096/vote`)
    cmd.run(client, message, params);
  }
};
