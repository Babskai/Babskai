const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = '!'

	const zekibot = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .setColor("RED")
       .setTitle(`Babskai Public Bot`)
       .setDescription(`
» **!davet** - Botu ekleyerek, destek çıkabilirsin.`)
       .addField("» Linkler", ` \n[Davet Et](https://discord.com/api/oauth2/authorize?client_id=746362244442619934&permissions=8&scope=bot)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/26VvdZj)`, false)
       .setFooter(`Babskai Public Bot`)
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
  name: 'bot',
  description: '[Admin Komutu]',
  usage: 'bot'
};