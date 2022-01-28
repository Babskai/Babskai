const db = require("quick.db");
const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = async (client, message, args) => {
  let çarpı = client.emojis.get(":x:");
  if (message.author.id !== "788373466604503040")
    return message.channel.send(
      çarpı + ":x: Bu komutu sadece `Yapımcım` **kullanabilir!**"
    );
  let nesne = args[0];
  let çarpı2 = client.emojis.get("788373466604503040");
  if (!nesne)
    return message.channel.send(
      ":face_in_clouds: **Gold üye olacak kişinin idsini girermisin başkan.** :face_in_clouds:"
    );

  await db.set(`gold_${nesne}`, "tm");
  let tik = client.emojis.get("788373466604503040");
  message.channel.send(`**<@${nesne}> Kullanıcısı, Başarıyla Gold Üye Oldu!**`);
  client.guilds
    .get("788373466604503040")
    .channel.find((x) => x.name === "gold-üye-log")
    .send(`${tik} <@${nesne}> kullanıcısı için gold üyeliği **açıldı!**`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3,
};
exports.help = {
  name: "gold-ver",
  description: "[Admin Komutu]",
  usage: "gold-ver",
};
