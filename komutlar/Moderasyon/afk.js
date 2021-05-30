exports.config = {
  name: "afk",
  aliases: [],
  description: 'Afk Olursunuz',
  usage: "Afk",
  async run (client, message, args) {
    const Discord = require("discord.js");
    const { JsonDatabase } = require("wio.db");
    const db = new JsonDatabase("myDatabase");
  const kisi = db.fetch(`afkid_${message.author.id}_${message.guild.id}`);
  if (kisi) return;
  const sebep = args[0];
  if (!args[0]) {
    let kullanıcı = message.guild.members.cache.get(message.author.id);
    const b = kullanıcı.displayName;
    await db.set(
      `afkSebep_${message.author.id}_${message.guild.id}`,
      "Sebep Girilmemiş"
    );
    await db.set(
      `afkid_${message.author.id}_${message.guild.id}`,
      message.author.id
    );
    await db.set(`afkAd_${message.author.id}_${message.guild.id}`, b);

    const a = await db.fetch(
      `afkSebep_${message.author.id}_${message.guild.id}`
    );

    const sebepsizafk = new Discord.MessageEmbed()
    .setTitle('AFK OLUNDU')
    .setDescription(`${message.member} Kişisi Başarıyla Afk Modunda Geçti Sebep: ${a}`)
    message.channel.send(sebepsizafk)
  }
  if (args[0]) {
    let sebep = args.join(" ");
    let kullanıcı = message.guild.members.cache.get(message.author.id);
    const b = kullanıcı.displayName;
    await db.set(`afkSebep_${message.author.id}_${message.guild.id}`, sebep);
    await db.set(
      `afkid_${message.author.id}_${message.guild.id}`,
      message.author.id
    );
    await db.set(`afkAd_${message.author.id}_${message.guild.id}`, b);
    const a = await db.fetch(
      `afkSebep_${message.author.id}_${message.guild.id}`
    );

    const sebepliafk = new Discord.MessageEmbed()
    .setTitle('AFK OLUNDU')
    .setDescription(`${message.member} Kişisi Başarıyla Afk Modunda Geçti Sebep: ${a}`)
    message.channel.send(sebepliafk)
  }
}
}