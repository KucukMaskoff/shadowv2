exports.config = {
  name: "çek",
  aliases: [],
  description: 'Etiketlediğiniz Kişiyi Yanınıza Çekersiniz',
  usage: "Çek",
  async run (client, message, args) {
    const Discord = require("discord.js");
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.reply("**Bu Komutu Kullanmaya Yetkin Yok!**");

  if (!message.member.voice.channel)
    return message.reply("**Bir Ses Kanalında Değilsin!**");
  let csm = message.mentions.members.first();
  if (!csm)
    return message.reply(
      "**Yanına Kimin Gelmesini İstiyor İsen Onu Etiketlemen Gerek!**"
    );
  if (!csm.voice.channel)
    return message.reply("**Etiketlenen Kişi Bir Sesli Kanalda Değil!**");
   const onayembed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTimestamp()
  .setAuthor("Çek Komutu")
  .setDescription(`${message.member} Seni Yanına Çekmek İsityor Onaylamak İçin 👍 Emojisine Tıkla!`)
  message.channel.send(onayembed).then(msg => {
  message.react('👍').then(() => message.react('👎'));
  const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
       csm.voice.setChannel(message.member.voice.channelID);
  message.channel.send("<@"+csm + "> **İsimli Kişi Yanına Taşındı!**");
		} else {
			message.reply('işlem iptal edildi!');
      message.delete({timeout:3000})
		}
	})
  })
	.catch(collected => {
		message.reply('Bir hatayla karşılaştık! Lütfen daha sonra tekrar deneyiniz.');
  })
}
}
