const Discord = require("discord.js")
module.exports = {
  name: "isimdegis",
  usage: `${process.env.prefix}isim`,
  description: "İsim değiştirmenizi sağlar!",
  execute(message) {
    if(!message.member.permissions.has("MANAGE_NICKNAMES")) return;
    const argsNot = message.content.split(" ");
    const args = argsNot.filter(e => e)
    const isim = argsNot.slice(2).join(" ");
    if(!message.mentions.members.first()) return message.reply("Değiştirilecek kişiyi etiketlemediniz.");
    if(!args[1].startsWith("<@!")) return message.channel.send("!isim <etiket> <isim> olarak kullanabilirsiniz.");
    if(!isim) return message.channel.send("Hangi isimle değiştirileceğini belirtmediniz. !isim <etiket> <isim>")
    let oldNick = message.mentions.members.first().nickname;
    if(oldNick === null){
      oldNick = message.mentions.members.first().user.username;
    }
    message.mentions.members.first().setNickname(isim).then(() => {
        message.channel.send(new Discord.MessageEmbed().setDescription(`${message.mentions.members.first().user.username}#${message.mentions.members.first().user.discriminator} adlı kişinin ismi ${isim} olarak değiştirildi. [Eski ismi: ${oldNick}]`))
    })
  },
};
