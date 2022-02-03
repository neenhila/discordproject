const Discord = require("discord.js");

module.exports = {
  name: "kick",
  usage: `${process.env.prefix}kick`,
  description:
    "Etiketlediğiniz kişiyi sunucudan atar. [Kişi tekrar girebilir.]",
  execute(message) {
    if (!message.member.permissions.has("KICK_MEMBERS" || "ADMINISTRATOR"))
      return;

    if (!message.mentions.members.first()) return message.reply("Kişiyi etiketlemedin.");

    const args = message.content.split(" ").slice(2);
    let kickedUser = message.mentions.members.first();
    if (kickedUser && kickedUser.kickable) {
      if (args) {
        sebep = args.join(" ");
      } else {
        sebep = "Sebep girilmedi. |";
      }
      kickedUser.kick({ reason: sebep }).then(() => {
        message.channel
          .send(
            new Discord.MessageEmbed().setDescription(
              `Başarıyla ${kickedUser.user} adlı kişiyi sunucudan attınız. :white_check_mark:`
            )
          )
          .catch((error) => console.log(error));
      });
    } else {
      return message.channel
        .send("İzniniz yok veya kişiyi sunucudan atamıyorum.")
        .catch((error) => console.log(error));
    }
  },
};
