exports.config = {
  name: "balık-tut",
  aliases: [],
  description: 'Balık Tutarsınız',
  usage: "Balık-Tut",
  async run (client, message, args) {
    const Discord = require('discord.js');
             message.channel.send('Balık tuttun balığı çekiyorsun.').then(message => {

   var baliklar = ['``Sazan tuttun!`` :fish:' ,'``Köpek balığı tuttun iyi para eder. Sat sat!`` :D' ,'``Uskumru tuttun!`` :fish:' ,'``Mezgit tuttun! Havyarıda var hee`` :) :fish:' ,'``Japon balığı tuttun yemeyi düşünmüyorsun herhalde?``' ,'``Hamsi tuttun!`` :fish:' ,'``Levrek tuttun!`` :fish:' ,'``Hiçbir şey tutamadın maalesef!`` :wastebasket:' ,'``Alabalık tuttun!`` :fish:' ,'``Maalesef balık oltadan kaçtı!`` :wastebasket:' ,'``İstavrit tuttun!`` :fish:','``balina tuttun! AMA olatnı kırdın aman satda para etsin 5 tane yeni olta alırsın XD`` :fish:'];
      var balik = baliklar[Math.floor(Math.random() * baliklar.length)];
           message.edit(`${balik}`);
    })
  }
}