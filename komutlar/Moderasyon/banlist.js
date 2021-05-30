exports.config = {
  name: "yasak-listesi",
  aliases: [],
  description: 'Sunucuda ki Yasaklı Kişileri Sıralar',
  usage: "Yasak-Listesi",
  async run (client, message, args) {
    const Discord = require("discord.js");
    const talkedRecently = new Set();
const bans = new Map();
            message.guild.fetchBans().then(g => {
                bans[g.id] = g;
                let banlist = (`${bans[g.id].map(ge => `\n (${ge.user.tag}) (${ge.user.id})`).join('\n')}`)
                        try {     
                let noembed = new Discord.MessageEmbed()
  .setColor('#0070FF')
                .setDescription(`Bu Sunucuda Yasaklı Kullanıcı Bulunmuyor.`)
                .setAuthor(message.guild.name, message.guild.iconURL() ? message.guild.iconURL() : "https://images-ext-2.discord.net/external/hHow2gpD0uyL8WnA8ynAHuPbzm_lE1lNAaxkLqDT0Fs/https/images-ext-1.discord.net/external/rBk_abKMsqAKoATjXbtyqKJt2bTXI_shMEemVpbNtFw/http/www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png")
               .setFooter('Komutu kullanan ' + message.author.tag, message.author.avatarURL())
                if(banlist.length === 0) return message.channel.send(noembed)
                const embed = new Discord.MessageEmbed()
                    .setDescription(banlist)
                    .setAuthor(message.guild.name, message.guild.iconURL() ? message.guild.iconURL() : "https://images-ext-2.discord.net/external/hHow2gpD0uyL8WnA8ynAHuPbzm_lE1lNAaxkLqDT0Fs/https/images-ext-1.discord.net/external/rBk_abKMsqAKoATjXbtyqKJt2bTXI_shMEemVpbNtFw/http/www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png")
   .setFooter('Komutu kullanan ' + message.author.tag, message.author.avatarURL())
                .setColor('#0070FF')
                message.channel.send(embed)
                      } catch (err) {
        const embed = new Discord.MessageEmbed()
            .addField(`Sunucuda Bulunan Yasaklılar`, 'sunucunuzda fazla sayıda yasaklı kullanıcı bulunuyor bu Yüzden gösteremiyorum. Discord izin vermiyor.')
            .setColor('RED')
          .setFooter('Komutu Kullanan ' + message.author.tag, message.author.avatarURL())
            .setTimestamp()
        message.channel.send(embed)
      }
    });
  }
}