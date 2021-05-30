exports.config = {
  name: "üyedurum",
  aliases: [],
  description: 'Toplam Kullanıcı Sayısını Vs. Gösterir',
  usage: "",
  async run (client, message, args) {
    const Discord = require("discord.js");
  let üye = new Discord.MessageEmbed()
  .setAuthor("Üyedurum")
  .setColor("RED")
  .addField("**Toplam Kullanıcı**",message.guild.memberCount )
  .addField("**Çevrimiçi Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'online').size)
  .addField("**Boşta Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'idle').size)
  .addField("**Rahatsız Etmeyindeki Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'dnd').size)
  .addField("**Çevrimdışı Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'offline').size)

    .setTimestamp()
  return message.channel.send(üye);
}
}