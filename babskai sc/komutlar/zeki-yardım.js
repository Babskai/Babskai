const Discord = require("discord.js")

exports.run = async(client, message) => {
    
    let prefix = 'z!'

    const zeki = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .setColor("RED")
       .setTitle(`Babskai Bot - Yardım Listesi`)
       .setDescription(`
 » **!yardım** - Botun Tüm Listelenmiş Komut Kategorisini Listeler.
 » **!kullanıcı** - Tüm Listelenmiş Kullanıcı Kategorisi.
 » **!moderasyon** - Moderasyon Komutlarını Listeler.
 » **!bot** - Botun Kendine Ait Komutlarını Listeler.
 » **!eğlence** - Tüm Eğlence Komutlarını Listeler.
 » **!koruma** - Tüm Koruma Komutlarını Listeler.

           ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ➦ Babskai Public Bot | !yardım

   🎁・Bize destek vermek, katkıda bulunmak için **!öneri <öneriniz>** komudunu kullan!`)
        .setImage('https://hackernoon.com/hn-images/1*Ixp7ZsUIDMs3QHvgKZmsKw.gif')
       .addField("» Bağlantılarım", `
 [Davet Et!](https://discord.com/oauth2/authorize?client_id=936607358442950707&scope=bot&permissions=27648860222)
 [Destek Sunucum!](https://discord.gg/8knqzNEwqv)`, false)
       .setFooter(message.author.username, message.author.avatarURL) 
    .setTimestamp()
      
  return message.channel.send(zeki) 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Yetki Gerekmez`
};

exports.help = {
  name: 'yardım',
  description: 'Yardım Komutu',
  usage: 'yardım'
};