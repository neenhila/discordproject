const Discord = require("discord.js");
const disbut = require("discord-buttons");
module.exports = {
  name: "coin",
  usage: `${process.env.prefix}toss`,
  description:
    "Yazı tura atmanızı sağlar.",
  execute(message) {
    message.delete().catch(error => console.log(error))
    let at = new disbut.MessageButton()
      .setStyle("gray")
      .setLabel("Parayı at")
      .setEmoji("🟢")
      .setID("at")

    let kapat = new disbut.MessageButton()
      .setStyle("gray")
      .setLabel("Kapat")
      .setEmoji("🔴")
      .setID("kapat")
    global.coinOwners = new Map();

    message.channel.send(new Discord.MessageEmbed().setDescription("🔵 Buton ile yazı tura atabilirsin. İşin bittiğinde beni kapatmayı unutma 🔵"), { buttons: [at, kapat] }).then(msg => {
      coinOwners.set(`${msg.id}`, `${message.author.id}`)
    })
  },
};


// 🎲 

