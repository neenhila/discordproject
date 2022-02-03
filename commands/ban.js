const Discord = require("discord.js");

module.exports = {
  name: "ban",
  usage: `${process.env.prefix}ban`,
  description: "Etiketlediğiniz kişiyi sunucudan yasaklar.",
  execute(message) {
    if (!message.member.permissions.has("BAN_MEMBERS" || "ADMINISTRATOR"))
      return;

    if(!message.mentions.members.first()) return message.reply("Kişiyi etiketlemedin.");
    const args = message.content.split(" ").slice(2);
    let bannedUser = message.mentions.members.first();
    if (bannedUser && bannedUser.bannable) {
      if (args.length > 1) {
        sebep = args.join(" ");
      } else {
        sebep = "Sebep girilmedi.";
      }
      bannedUser.ban({ reason: sebep }).then(() => {
        message.channel
          .send(
            new Discord.MessageEmbed().setDescription(
              `Başarıyla ${bannedUser.user} adlı kişiyi sunucudan yasakladınız. :white_check_mark:\n**Yasaklanma sebebi**: \`${sebep}\``
            )
          )
          .catch((error) => console.log(error));
      });
    } else {
      return message.channel
        .send("İzniniz yok veya kişiyi banlayamıyorum.")
        .catch((error) => console.log(error));
    }
  },
};
