
const Discord = require("discord.js");
const { client } = require("../index.js");
const { commands } = require("../events/message.js")

module.exports = {
    name: "help",
    usage: `${process.env.prefix}yardım`,
    description: "Bot hakkında bilgileri içeren komuttur.",
    execute(message) {
       
       let helpEmbed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }), `https://neenhila.netlify.app`)
            .setDescription(`${commands.map(x => `\`${x.name}\` => ${x.description}`).join("\n")}`)
            .setFooter("Discord Project", client.user.displayAvatarURL())
            .setTimestamp()
            .setTitle("Burada bulunan komutların hepsi çalışmaktadır. Eğer doğru çalışmadığını düşündüğünüz bir komut varsa lütfen bota özel mesaj olarak komutu yazınız. (Örneğin: !toss) ")
            .setThumbnail(client.user.displayAvatarURL())
        message.channel.send(helpEmbed)
    },  
};
