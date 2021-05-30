exports.config = {
  name: "xox",
  aliases: [],
  description: 'Tic Tac Toe Oynarsınız',
  usage: "Xox",
  async run (client, message, args) {
    const Discord = require("discord.js");
    const { tictactoe } = require('reconlx')
    const onayembed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTimestamp()
  .setAuthor("XOX (TİC TAC TOE)")
  .setDescription(`${message.mentions.members.first}`)
  message.channel.send(onayembed).then(msg => {
msg.react('✔️').then(() => msg.react('✖️'));

const filter = (reaction, user) => {
    return ['✔️', '✖️'].includes(reaction.emoji.name) && user.id === message.author.id;
};

msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();
  const onayembed = new Discord.MessageEmbed()
        if (reaction.emoji.name === '✔️') {
          const member = message.mentions.members.first() 
if(!member) return message.channel.send('Üye etiketle')
new tictactoe({player_two: member, message: message})
        } else {
            message.reply('Nuke işlemi iptal edildi!');
      msg.delete({timeout:3000}
        )
      }
    })
  })
}
}