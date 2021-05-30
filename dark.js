const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json'); 
const fs= require('fs');
const moment = require('moment');
require('./eventutil/eventLoader')(client);
const express = require("express")
const { JsonDatabase } = require("wio.db");
const db = new JsonDatabase("myDatabase");
const chalk = require("chalk");
// const Topgg = require('@top-gg/sdk')
// const DBL = require("dblapi.js")
// client.topgg_api = new Topgg.Api(process.env.dblToken)
// const dbl = new DBL(process.env.dblToken, { webhookPort: 5000, webhookAuth: "password" }, client); 

// const app = express()
// const wh = new Topgg.Webhook("webhookauth123")

// app.post("/dblwebhook", wh.listener(vote => {
//     const kanal = client.channels.cache.get("842742845688643594")
//   const rol = client.roles.cache.get("839167769404506112")
//   const destek = client.guilds.cache.get("815207250737496124")
//   if(destek.members.cache.get(vote.user.id)) {
//       vote.user.roles.add(rol.id)
//       kanal.send(`${vote.user} Adlı kullanıcı botumuza oy kullandı \`${rol.name}\` Adlı rol verildi toplam **${client.topgg_api.getVotes().length}** tane oy oldu`)
//   } else {
//       kanal.send(`${vote.user} Adlı kullanıcı botumuza oy kullandı toplam **${client.topgg_api.getVotes().length}** tane oy oldu`)
//   }
//   const embed = new Discord.MessageEmbed().setColor("GREEN").setAuthor(client.user.username, client.user.avatarURL()).setDescription(`Merhaba ${vote.user.username}** :wave:
//   Oy verme zamanı geldi :yum:\n ama istersen bu mesajı \`s!bildirim kapat\` komutu ile kapatabilirsin *Tabi bizi desteklemeyi istemiyorsan*\nAlttaki linkten Botumuza oy verip bize destek olabilirsin\n[Oy vermek için tıkla](https://top.gg/bot/814948557009453096/vote)`)
//   setTimeout(() => {
//     if(!db.get(`bildirim_${vote.user.id}`)) vote.user.send(embed)
//   }, 43200000)
// }))

// // CAN.GG

// setInterval(() => {
//   client.topgg_api.postStats({
//     serverCount: client.guilds.cache.size,
//     shardId: 0,
//     shardCount: client.options.shardCount
//   })
// }, 1800000)

// // CAN.GG
var prefix = ayarlar.prefix; 

client.setMaxListeners(30)

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection(); 

fs.readdir("./komutlar/", (err, files) => { 
if(err) console.error(err)
files.forEach(f => {
 fs.readdir(`./komutlar/${f}`, (err, filess) => {
 if (err) console.error(err);
 console.log(chalk.red(`${f} `)+chalk.green(`Klasöründen `)+chalk.red(`${filess.length} `)+chalk.green(`Komut Yüklendi`)+chalk.red(`!`));
 filess.forEach(fs => { 
   let props = require(`./komutlar/${f}/${fs}`)
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => client.aliases.set(alias, props.help.name));
 })
 })
})
})
// app.listen(process.env.PORT)
client.login('ODQ3MDY4NzYzMjAzNDM2NTQ0.YK4sQg.Mla7iPIjzgwF548LnP9_jsNguVA')
//-----------KOMUTLAR--------------//
//-----------oynuyor--------------//
client.on('ready', () => {
  console.log("Bot aktif oldu")
 setTimeout(() =>  client.user.setActivity(`${client.guilds.cache.size} Sunucu > ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Üye > http://shadow-chasters.cf > s!yardım`), 20000)
})
//-----------oynuyor son--------------//
//-----------konuşma--------------//
client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sa') {
        msg.reply('Aleyküm Selam Nasılsın Reis');      
      } 
      }
    });
client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'nasılsın') {
        msg.reply('İyiyim Sen?');      
      } 
      }
    });
    client.on('message', msg => {
      if (msg.content.toLowerCase() === prefix + 'destek-sunucu') {
        msg.channel.send(`https://discord.gg/wmYM2zsHvS`);
      }
    })


client.on('message', msg => {
  if (msg.content.toLowerCase() === '31') {
    if(msg.guild.id !== "815207250737496124") return;
    msg.delete()
    msg.reply(`Öhm Öhm "Sevgi Ve Saygı" Kuralları`);
  }
})

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'isim') {
    if(msg.guild.id !== "815207250737496124") return;
    msg.channel.send(`İsim değişmek için boost gerekli ismin sıfırlanıyor...`)
  }
})

client.on('message', message => {
  if (message.content.toLowerCase() === prefix + 'web') {
    message.channel.send('http://shadow-chasters.cf')
  }
})

client.on('message', message => {
  if (message.content.toLowerCase() === prefix + 'davet') {
    const davetembed = new Discord.MessageEmbed()
    .setTitle(`:point_down: Alltakı Linkten Sunucuda Ekle! :point_down:`)
    .setDescription(`[Tıkla](https://discord.com/oauth2/authorize?client_id=814948557009453096&scope=bot&permissions=805314622) Ve Ekle!`)
    message.channel.send(davetembed)
  }
})

//---------konuşma son--------------//
//---------kediler hakkında--------------//
client.on('message', message => {
  if (message.content.toLowerCase() === prefix + 'kediler-hakkında') {
    if(db.get(`bakım`)) return message.channel.send(ayarlar.bakımyazı)
    const kanal = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Kediler Hakkında`)
    .setTitle(`Kediler Hakkında az bilinenler`) //Can <3 Sude //gelmişken hatıra
    .setDescription(`
    1.Dişi kediler sağ patilerini daha iyi kullanırken, erkek kediler çoğunlukla sol patide iyidirler.
    
    2.Kedi sahiplerinin yüzde 17’sinden fazlası üniversite mezunudur.
    
    3.Bir kedinin beyin yapısı insanınkine çok benzer. Duyguları üreten kısımları aynıdır.
    
    4.“Ailurophilia” kelimesi Yunanca ailouros (ev kedisi) ile philia (arkadaşlık) sözcüklerinin birleşiminden oluşur ve kedi sevgisi anlamına gelir.
    
    5.Kedilerin IQ seviyeleri köpeklere göre daha düşüktür ama karmaşık problemlerin çözümünde köpeklerden daha iyilerdir.
    
    6.Kedilerin genellikle laktoza karşı tolerans seviyeleri düşüktür. Yani onlara süt vermekten vazgeçin.
    
    7.Kedi gurultusunun iyileştirici özelliği vardır. Öte yandan kedinin sinirli veya hoşnut olduğunun da göstergesi olabilir.
    
    8.Kedi gurultusu ile kemik kırık ve çatlaklarının iyileşme hızı arasında bağ vardır.
    
    9.Kediler hayatlarının yüzde 70’ini uyuyarak geçirir.
    
    10.Kediler ortalama 100 çeşit ses çıkarır. Köpeklerde bu sayı 10’dur.
    `)
    .setThumbnail('https://cdn.glitch.com/420947c8-080f-42c8-9c59-fd66ebafab72%2Fkediler_hakkinda_az_bilinen_50_sasirtici_bilgi_0_1.jpg?v=1615390362229')
     
  message.channel.send(kanal);
  }
});

//---------kediler hakkında son--------------//
//---------oylama--------------//
client.on ('message', message => {
  if (message.content.startsWith(prefix + 'oylama')) {
     if(db.get(`bakım`)) return message.channel.send(`Bot ortalama 1-2 saat bakıma alındı. Bot bakım giriş saat'i 12.36 Lütfen 1-2 saat bekleyin.`)
    const args = message.content.split(' ').slice(1)
    const botmesajı = args.join(" ")
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Oylama Yapmak İçin **Yönetici** Olmalısın!');
    if(!botmesajı) return message.reply('Oylamanın Ne Olacağını Yazmalısın!');
    message.delete(message.author)
    const embed = new Discord.MessageEmbed()
    .setTitle(`OYLAMA`)
    .setDescription(botmesajı)
    .setFooter(`Shadow Chasters`)
    message.channel.send({ embed: embed}).then( embedMessage => {
      embedMessage.react("✔️")
      embedMessage.react("❌");
    })
  }
})
//---------oylama son--------------//
//---------kick--------------//

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'kick')) {
      if(db.get(`bakım`)) return message.channel.send(`Bot ortalama 1-2 saat bakıma alındı. Bot bakım giriş saat'i 12.36 Lütfen 1-2 saat bekleyin.`)
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`${user.tag} Bu Komutu Kulanmak İçin \`Üyeleri At\` Yetkisine Sahip Olmalısın!! \n <@${message.author.id}>`)
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.id === '819507625515155476')
            log.send(`${user.tag} Kişisini Sunucudan Kickledim.`);
          })
          .catch(err => {
            message.reply('Bu Kullanıcıyı Atamam.');
            console.error(err);
          });
      } else {
        message.reply("Bahsettiğin Kullanıcı Sunucuda Bulunmamaktadır!");
      }
    } else {
      message.reply("Atılıacak Kişiyi Etiketle!");
    }
  }
});
//---------kick son--------------//
//---------ban--------------//

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'ban')) {
      if(db.get(`bakım`)) return message.channel.send(`Bot ortalama 1-2 saat bakıma alındı. Bot bakım giriş saat'i 12.36 Lütfen 1-2 saat bekleyin.`)
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`${user.tag} Bu Komutu Kulanmak İçin \`Üyeleri Yasakla\` Yetkisine Sahip Olmalısın!! \n <@${message.author.id}>`)
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.id === '819526661468061756')
            log.send(`${user.tag} Kişisini Sunucudan Banladım.`);
          })
          .catch(err => {
            message.reply('Bu Kullanıcıyı Yasaklayamam.');
            console.error(err);
          });
      } else {
        message.reply("Bahsettiğin Kullanıcı Sunucuda Bulunmamaktadır!");
      }
    } else {
      message.reply("Yasaklanancak Kişiyi Etiketle!");
    }
  }
});
//---------ban son--------------//
//---------bot sunucuya giriş çıkış--------------//
client.on("guildCreate", guild => {
       const { MessageEmbed } = require("discord.js")
       let atria  = client.channels.cache.get("819251712980156447")

       const embed = new MessageEmbed()
    .setAuthor(`Sunucuya Eklendim :zany_face:`, client.user.avatarURL())
    .setColor("#14FF00")
    .setThumbnail(guild.iconURL())
    .addField(`Sunucu Adı`,guild.name)
    .addField(`Sunucu ID`, guild.id, true)
    .addField(`Kurucu`,guild.owner.user.tag, true)
    .addField(`Kurucu ID`,guild.owner.user.id, true)
    .addField(`Toplam Kullanıcı`,guild.memberCount, true)
    .addField(`Toplam Kanal`,guild.channels.cache.size, true )
    .setFooter(`© 2021 | Shadow`, client.user.avatarURL())
    atria.send(embed)
    

client.on("guildDelete", guild => {
    let atria1 = client.channels.cache.get("819251712980156447")

    const embed1 = new MessageEmbed()
    .setAuthor(`Sunucudan Atıldım :confused:`, client.user.avatarURL())
    .setColor("#FF0000")
    .setThumbnail(guild.iconURL())
    .addField(`Sunucu Adı`,guild.name)
    .addField(`Sunucu ID`, guild.id, true)
    .addField(`Kurucu`,guild.owner.user.tag, true)
    .addField(`Kurucu ID`,guild.owner.user.id, true)
    .addField(`Toplam Kullanıcı`,guild.memberCount, true)
    .addField(`Toplam Kanal`,guild.channels.cache.size, true )
    .setFooter(`© 2021 | Shadow`, client.user.avatarURL())
    atria1.send(embed1)
    });
});
//---------bot sunucuya giriş çıkış son--------------//
//-----------afk--------------//
client.on("message" , async msg => {
  
  if(!msg.guild) return;
  if(msg.content.startsWith(ayarlar.prefix + "afk")) return; 

  let afk = msg.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
  
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){

       const etiketleme = new Discord.MessageEmbed()
       .setTitle(`${msg.member} Etiketlediğiniz Kişi Şuanda Afk`)
       .setColor("#FF0000")
       msg.chennel.send(etiketleme)
   }
 }
  if(msg.author.id === kisi){

       const afkembed = new Discord.MessageEmbed()
    .setTitle(`Afklıktan Çıktınız`)
    .setColor("GREEN")
    .setDescription(`${msg.member.id} Kişisi Afklıktan Başarılı Bir Şekilde Çıktı`)
    msg.channel.send(afkembed)
   db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
    msg.member.setNickname(isim)
    
  }
  
});
//-----------afk son--------------//
//-----------mühürlenmiş kanal--------------//
client.on("message", m => {
  if (m.channel.id !== "827258669166886992") {
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  };
})
//-----------mühürlenmiş kanal son--------------//