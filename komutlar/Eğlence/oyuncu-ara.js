exports.config = {
  name: "oyuncu-ara",
  aliases: [],
  description: 'Oyuncu-ararsınız',
  usage: "Oyuncu-Ara",
  async run (client, message, args) {
    const Discord = require('discord.js');
  const game = args[0]
         if (!game) return message.reply('Bir Oyun Blirtmelisin!!!')
         const nott = message.content.split(' ').slice(2)
         const not = nott.join(" ")
         if (message.member.voice.channel) {
           const Discord = require('discord.js')
           const embed = new Discord.MessageEmbed()
             .setTitle(`**${message.author.tag}** Oyuncu Arıyor`)
             .setColor("RANDOM")
             .addField("Oyun:", `${game}`)
             .addField("Notu:", `${not}`)
             .addField('Ses Kanalı:', `${message.member.voice.channel}`)
             message.channel.send(embed)
         } else {
           message.reply("Lütfen Sesli Kanal'a Geçip Tekrar Dene")
          }
        }
      }