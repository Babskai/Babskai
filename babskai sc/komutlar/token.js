const Discord = require("discord.js")

exports.run = async(client, message) => {
  const bottoken = new Discord.RichEmbed()
  .setDescription('**Token mi İstedin Alabilirsin :)**')
  .setImage('https://cdn.discordapp.com/attachments/936686605048119378/936689258671001680/jnah-nah.gif')
  .setColor('YELLOW')
  message.channel.send(bottoken)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'token',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'token'
}