exports.config = {
  name: "eval",
  aliases: [],
  description: 'Komut Deneme Komutu',
  usage: "eval",
  async run (client, message, args) {
    const Discord = require("discord.js");
if(message.author.id !== "737034768591618141" && message.author.id !== "351008627726876692") return message.channel.send(`Sahip olda gel koçum`)
  try {
 
    var code = args.join(" ");
    var evaled = eval(code);
    let tip = typeof(clean(evaled))
 
    evaled = require("util").inspect(evaled);
   
 
    if(evaled.length>1000){
      let Embed = new Discord.MessageEmbed()
    .addField("Giriş","```js\n" + code + "```")
    .setColor("FFD700")
    .addField("Sonuç", "```js\n" +evaled.slice(0,1000) + "...```")
    .addField('Tür', `\`${tip}\``, true)
    .addField('Uzunluk', `\`${evaled.length}\``, true)
    .addField('Zaman', ` \`0.0${client.ws.ping} ms\` `, true)
 
     message.channel.send(Embed).then(async function(mesajzz) {
      const filter = (reaction, user) => user.id === message.author.id;
      await mesajzz.react("✅").catch(function() {})
      await mesajzz.react("❌").catch(function() {})
      await mesajzz.react("↩️").catch(function() {})
      var reactions = mesajzz.createReactionCollector(filter);
   
      reactions.on("collect", async function(reaction) {
        if (reaction.emoji.name === "✅") {
          mesajzz.delete()
    message.delete()
    }
      });
      reactions.on("collect", async function(reaction) {
        if (reaction.emoji.name === "❌") {
          mesajzz.edit(new Discord.MessageEmbed()
    .addField("Giriş","```diff\n- ❌ Bu Eval "+message.member.displayName+" Tarafından Gizlendi.```")
    .setColor("FFD700")
    .addField("Sonuç", "```diff\n- ❌ Bu Eval "+message.member.displayName+" Tarafından Gizlendi.```")
    .addField('Tür', `\`Gizlendi\``, true)
    .addField('Uzunluk', `\`Gizlendi\``, true)
    .addField('Zaman', ` \`Gizlendi\` `, true))
    mesajzz.reactions.remove(message.author.id)
        }
      });
      reactions.on("collect", async function(reaction) {
        if (reaction.emoji.name === "↩️") {
          mesajzz.edit(Embed)
          reaction.users.remove(message.author.id)
        }
      });
    });
   
    }else{
 
    let Embed = new Discord.MessageEmbed()
    .addField("Giriş","```js\n" + code + "```")
    .setColor("FFD700")
    .addField("Sonuç", "```js\n" + clean(evaled) + "```")
    .addField('Tür', `\`${tip}\``, true)
    .addField('Uzunluk', `\`${evaled.length}\``, true)
    .addField('Zaman', ` \`0.0${client.ws.ping} ms\` `, true)
 
         message.channel.send(Embed).then(async function(mesajzz) {
      const filter = (reaction, user) => user.id === message.author.id;
      await mesajzz.react("✅").catch(function() {})
      await mesajzz.react("❌").catch(function() {})
      await mesajzz.react("↩️").catch(function() {})
      var reactions = mesajzz.createReactionCollector(filter);
   
      reactions.on("collect", async function(reaction) {
        if (reaction.emoji.name === "✅") {
          mesajzz.delete()
    message.delete()
  }
      });
      reactions.on("collect", async function(reaction) {
        if (reaction.emoji.name === "❌") {
          mesajzz.edit(new Discord.MessageEmbed()
    .addField("Giriş","```diff\n- ❌ Bu Eval "+message.member.displayName+" Tarafından Gizlendi.```")
    .setColor("FFD700")
    .addField("Sonuç", "```diff\n- ❌ Bu Eval "+message.member.displayName+" Tarafından Gizlendi.```")
    .addField('Tür', `\`Gizlendi\``, true)
    .addField('Uzunluk', `\`Gizlendi\``, true)
    .addField('Zaman', ` \`Gizlendi\` `, true))
    reaction.users.remove(message.author.id)
  }
      });
      reactions.on("collect", async function(reaction) {
        if (reaction.emoji.name === "↩️") {
          mesajzz.edit(Embed)
          reaction.users.remove(message.author.id)
        }
      });
    });
 
   
    }
   
  }
 
catch (err) {
         message.channel.send(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
 
 
 
function clean(text) {
if (typeof(text) === "string")
  return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
  return text;
}
}
}