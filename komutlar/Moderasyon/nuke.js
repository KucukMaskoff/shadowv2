exports.config = {
  name: "nuke",
  aliases: [],
  description: 'belirtilen kanala nuke atar',
  usage: "nuke",
  async run (client, message, args) {
    const Discord = require("discord.js");
  const onayembed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTimestamp()
  .setAuthor("Nuke Komutu") 
  .setFooter("Onaylamak için ✔️ emojisine, Red etmek içinse ✖️ emojisine tıklayabilirsiniz")
  .setDescription("**UYARI!** \n\nEğer nuke işlemini onaylarsanız bu kanal kalıcı olarak **silinecek**,\n**geri getirilemeyecektir!**\nAncak bu kanalın **kopyası oluşturulacaktır!** \n")
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
      message.channel.clone().then(m => m.send(new Discord.MessageEmbed().setImage("https://media1.tenor.com/images/b19fe8078c0ca25db66e20494d74fbee/tenor.gif?itemid=14282225")))
      message.channel.delete();
 
        } else {
            message.reply('Nuke işlemi iptal edildi!');
      msg.delete({timeout:3000})
    }
  })
})
}
}