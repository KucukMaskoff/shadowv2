exports.config = {
  name: "roller",
  aliases: [],
  description: 'Sunucudaki Rolleri Sıralar',
  usage: "",
  async run (client, message, args) {
    const Discord = require('discord.js');
    const { JsonDatabase } = require('wio.db');
    const db = new JsonDatabase('myDatabase');
  const prefix = 's!';
  if(message.guild.roles.cache.size <= 0) return;
  if(args[0] && args[0] === 'sırala') {
    return message.channel.send(new Discord.MessageEmbed()
    .setAuthor(message.guild.name+' Sunucusunun rolleri', message.guild.iconURL({ dynamic: true, size: 2048 }))
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    .setDescription(`**Roller [${message.guild.roles.cache.size}]**
    
${message.guild.roles.cache.filter(x => x.name !== '@everyone').sort((a, b) => b.position-a.position).sort((a, b) => b.members.size-a.members.size).map(role => `${role} (**${role.members.size}**)`).join('\n')}`)
    .setFooter('Kulanan: '+message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    .setColor('GREEN'));
  };
  if(!args[0] || !client.guilds.cache.some(x => x.name.toLowerCase() === args.join(' ').toLowerCase())) {

    return message.channel.send(new Discord.MessageEmbed()
    .setAuthor(message.guild.name+' Sunucusunun rolleri', message.guild.iconURL({ dynamic: true, size: 2048 }))
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    .setDescription(`**Roller [${message.guild.roles.cache.size}]**
    
${message.guild.roles.cache.filter(x => x.name !== '@everyone').sort((a, b) => b.position-a.position).map(role => `${role} (**${role.members.size}**)`).join('\n')}`)
    .setFooter(`Üye sayısını sıralamak için ${prefix}roller sırala`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    .setColor('GREEN'));

  } else {

    message.guild = client.guilds.cache.find(x => x.name.toLowerCase() === args.join(' ').toLowerCase());
    return message.channel.send(new Discord.MessageEmbed()
    .setAuthor(message.guild.name+' Sunucusunun rolleri', message.guild.iconURL({ dynamic: true, size: 2048 }))
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    .setDescription(`**Roller [${message.guild.roles.cache.size}]**
    
${message.guild.roles.cache.filter(x => x.name !== '@everyone').sort((a, b) => b.position-a.position).map(role => `${role} (**${role.members.size}**)`).join('\n')}`)
    .setFooter(`Üye sayısını sıralamak için ${prefix}roller sırala`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    .setColor('GREEN'));
  }
}
}