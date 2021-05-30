exports.config = {
  name: "istatistik",
  aliases: [],
  description: 'Botun İstatistiklerini Görürsünüz',
  usage: "İstatistik",
  async run (client, message, args) {
    const Discord = require("discord.js");
    const moment = require("moment");
    const os = require("os");
    require("moment-duration-format");
    const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setFooter('Shadow Chasters', client.user.avatarURL)
  .addField("<a:oks:815864505975308298> **Botun Sahibi**", "<@737034768591618141> DarkSide clârk#9963")
  .addField("<a:oks:815864505975308298>  **Emeği Geçen** ","<@351008627726876692> ∆ Cano#9315")
  .addField("<a:oks:815864505975308298> **Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("<a:oks:815864505975308298> **Çalışma süresi**", seksizaman)
  .addField("<a:oks:815864505975308298> **Kullanıcılar**", client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("<a:oks:815864505975308298> **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
  .addField("<a:oks:815864505975308298> **Kanallar**", client.channels.cache.size.toLocaleString(), true)
  .addField("<a:oks:815864505975308298> **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("<a:oks:815864505975308298> **Node.JS sürüm**", `${process.version}`, true)
  .addField("<a:oks:815864505975308298> **Ping**", `${client.ws.ping} ms`)
  .addField("<a:oks:815864505975308298> **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("<a:oks:815864505975308298> **Bit**", `\`${os.arch()}\``, true)
  .addField("<a:oks:815864505975308298> **İşletim Sistemi**", `\`\`${os.platform()}\`\``) 
  .addField("**<a:oks:815864505975308298> Bot Davet**", " [Davet Et](https://discord.com/oauth2/authorize?client_id=814948557009453096&scope=bot&permissions=805314622)", )
  .addField("**<a:oks:815864505975308298> Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/2aa4wJECEx)", )
  .addField("**<a:oks:815864505975308298> Voteleme sayfası**", " [Botu votele](https://top.gg/bot/814948557009453096)", )
  message.channel.send(istatistikler);
  }
}