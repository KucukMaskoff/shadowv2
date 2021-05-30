exports.config = {
    name: "bitcoin",
    aliases: [],
    description: 'Ülkelerin Bitcoin Değerini Gösterir',
    usage: "",
    async run (client, message, args) {
        const snekfetch = require("snekfetch");
    snekfetch.get("https://blockchain.info/ticker").then((body) => {
        message.channel.send({
            embed: {
                title: "Bitcoin Değer",
                description: "Değerlerin her biri, farklı ülkelerde değişecek olan bir Bitcoin'in değeridir.",
                color: 3066993,
                fields: Object.keys(body.body).map((c) => {
                    return {
                        name: c,
                        value: "**Fiyat**: " + body.body[c].symbol + body.body[c].buy + "\n**Satış Değeri**: " + body.body[c].symbol + body.body[c].sell,
                        inline: true
                    }
                })
            }
        })
    }).catch((error) => {
        message.channel.send({
            embed: {
                title: "HATA!",
                color: 0xE50000,
                description: "Bitcoin fiyatlarını alırken beklenmeyen bir hata oluştu."
            }
        })
        console.error("Bitcoin Bilgisi alınamad", error.message)
    })
}
}