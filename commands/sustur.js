const Discord = require("discord.js")
module.exports = {
    name: "sustur",
    usage: `${process.env.prefix}sustur`,
    description: "Kişiyi susturmanızı sağlar.",
    execute(message) {

        let mutedRol = message.guild.roles.cache.get("936752847222095932");

        if (message.mentions.members.first()) {
            message.mentions.members.first().roles.add(mutedRol).catch(e => {
                console.log(e)
                return message.channel.send(new Discord.MessageEmbed().setDescription(`Kişiyi susturamadım.`).setColor("RED").setFooter("Discord Project").setTimestamp());
            })
            message.channel.send(new Discord.MessageEmbed().setDescription(`${message.mentions.members.first().user} başarıyla susturuldu! Süre 30 dakika!`).setColor("GREEN").setFooter("Discord Project").setTimestamp())
        } else return message.reply("Kişiyi etiketlemedin.");

    },
};
