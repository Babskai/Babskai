const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = 'z!'
  
	const zekibot = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .setColor("RED")
       .setTitle(`Babskai Bot - Eğlence`)
       .setDescription(`
» **!yaz <mesaj>** - Bota istediğiniz mesajı yazdırırsınız.
» **!sahtemesaj <@kullanıcı> <mesaj>** - Etiketlediğiniz Kullanıcıya İstediğiniz Mesajı Yazdırırsınız.
» **!missionpassed** - Profilinize Mission Passed Efekti Verir.
» **!havadurumu <şehir>** - Girilen Şehirin Hava Durumunu Listeler.
» **!youtube <ara>** - YouTube'da Bir şey aratırsınız.
» **!kralol** - Kral olursunuz.
» **!afk <sebep>** - AFK Olursunuz.
» **!yılbaşı** - Yılbaşı Sayaç.
» **!token** - Botun tokenine erişebilirsin.
» **!düello** - Biriyle 1vs1 kapışabilirsiniz.
» **!tkm** - Taş, kağıt , makas oynarsınız.
» **!espri** - Gülmek garanti.
» **!banner** - Banner bir yazı yazarsınız.`)
.addField("**»Linkler**", ` \n[Davet Et](https://discord.com/api/oauth2/authorize?client_id=746362244442619934&permissions=8&scope=bot)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/26VvdZj)`, false)
       .setFooter(`Babskai Bot - Eğlence`)
  return message.channel.send(zekibot)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'eğlence',
  description: '[Admin Komutu]',
  usage: 'eğlence'
};