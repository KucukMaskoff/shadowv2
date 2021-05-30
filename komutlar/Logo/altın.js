exports.config = {
  name: "altın",
  aliases: [],
  description: 'Altın Logo Oluşturursunuz',
  usage: "Altin",
  async run (client, message, args) {
    const Discord = require("discord.js");
  const yazi = args.slice(0).join('+'); 
  if(!yazi) return message.channel.send(`**Yapacağım logonun ismini yazınız...**  <a:maple_leaf:742698148329291826>`)
  const linqo = `https://habbofont.net/font/steampunk/${yazi}.gif`
  .replace(' ', '+')
  const embed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RED")
  .setImage(linqo)
  .setFooter('Altın Logo Oluşturuldu')
  message.channel.send(embed)
}
}