exports.config = {
  name: "bakım",
  aliases: [],
  description: 'Botu Bakıma Alırsınız',
  usage: "Bakım",
  async run (client, message, args) {
    const discord = require("discord.js");
    const { JsonDatabase } = require("wio.db");
    const db = new JsonDatabase("myDatabase");
if(message.author.id !== "737034768591618141" && message.author.id !== "351008627726876692") return message.channel.send(`Sahip olda gel koçum`)
if(!args[0]) return message.channel.send(`Lütfen bir argüman giriniz \nal, çıkar`)
if(args[0] !== "al" && args[0] !== "çıkar") return message.channel.send(`Lütfen bir argüman giriniz\nal, çıkar`)
if(args[0] === "al") {
  if(db.get(`bakım`)) return message.channel.send(`Bot zaten bakımda hayvan`)
  await db.set(`bakım`, {sebep: args.slice(1).join(" ") ? args.slice(1).join(" ") : "Girilmemiş", date: Date.now()})
  message.channel.send(`Botu bakıma aldım canım`)
} else {
  if(!db.get(`bakım`)) return message.channel.send(`Bot bakımda değil cınım`)
  await db.delete(`bakım`)
  message.channel.send(`Botu bakımdan çıkardım bebem`)
}
}
}