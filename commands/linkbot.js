const db = require("quick.db")
const Discord = require("discord.js")
module.exports = {
  name: "linkbot",
  usage: `${process.env.prefix}linkbot`,
  description: "Botu kullanıcıya bağlar.",
  execute(message) {
    const userArray = message.mentions.users.array();
    if(!userArray[0]) return;
    if(userArray[0].bot) return message.reply("Önce kişiyi, sonra botu etiketle.")
    if(userArray.length < 2) return message.reply("Hangi bota bağlayacağımı etiketlemedin.")
    if(!userArray[1].bot) return message.reply("Kişiye yalnızca bot bağlayabilirsin.")

    let isConnected = db.get(userArray[0].id)
    if(isConnected) return message.reply("Bu kişi zaten bir bota sahip, bot ise " + `<@!${isConnected}>` + " olarak gözüküyor.");

    db.set(userArray[0].id, userArray[1].id);
    message.channel.send(new Discord.MessageEmbed().setDescription(`Başarıyla ${userArray[0]} adlı kullanıcıya ${userArray[1]} adlı bot bağlanmıştır.`))

  },
};
