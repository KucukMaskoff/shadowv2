exports.config = {
  name: "google",
  aliases: [],
  description: 'Google Logo Oluşturursunuz',
  usage: "Google",
  async run (client, message, args) {
    const Discord = require('discord.js');
  const yazi = args.slice(0).join('+'); 
  if(!yazi) return message.channel.send(`**Yapacağım logonun ismini yazınız...**  <a:maple_leaf:742698148329291826>`)
  const linqo = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=colored2-logo&text=${yazi}`
  .replace(' ', '+')
  const embed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter('google Logo Oluşturuldu')
  message.channel.send(embed)
}
}