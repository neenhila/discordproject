const ping = require("ping");
const db = require("quick.db");
const fetch = require("node-fetch")
const Discord = require("discord.js")
const {client} = require("../index.js")
module.exports = {
    name: "uptime",
    usage: `${process.env.prefix}uptime`,
    description: "Botunuzu 7/24 aktif tutmanızı sağlar.",
    async execute(message) {
        
        var spl = message.content.slice().split(" ");
        var link = spl[1];
        fetch(link)
            .then(() => {
                if (
                    db
                        .get("linkleri")
                        .map(z => z.url)
                        .includes(link)
                )
                    return message.channel.send(
                        "**⛔ Bu link daha önce uptime edilmiş!**"
                    );

                let yardım = new Discord.MessageEmbed()
                    .setAuthor(client.user.username, client.user.avatarURL)
                    .setColor(0x6a3db8)
                    .setDescription("**✅ Başarıyla uptime edildi.**")
                    .setFooter(`© ${client.user.username}`, client.user.displayAvatarURL)
                    .setTimestamp();
                message.channel.send(yardım).then(msg => msg.delete({timeout: 60000})); 
                db.push("linkleri", { url: link, owner: message.author.id });
            })
            .catch(e => {
              console.log(e)
                let yardım = new Discord.MessageEmbed()
                    .setAuthor(client.user.username, client.user.avatarURL)
                    .setColor(0x6a3db8)
                    .setDescription("⛔ **Sadece URL'leri kabul ediyorum.**")
                    .setFooter(`© ${client.user.username}`, client.user.displayAvatarURL)
                    .setTimestamp();
                return message.channel.send(yardım).then(msg => msg.delete({timeout: 60000})); 
            });


    },
};
