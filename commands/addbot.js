const { client } = require("../index.js");
const Discord = require("discord.js");
const db = require("quick.db");


module.exports = {
  name: "addbot",
  usage: `${process.env.prefix}addbot`,
  description: "Botunuzu sunucumuza eklemenizi sağlar.",
  async execute(message) {
    let varMi = db.get(message.author.id);
    if(varMi) return message.reply("Zaten bir bot eklediniz. Botunuzun ID'si: " + varMi + " eğer bu botu silmek istiyorsanız yetkili ile görüşünüz.")
    const argsNot = message.content.slice().split(" ");
    const args = argsNot.filter(e => e);
    if (!args[1]) return;
    let userGet = await client.users.fetch(args[1]).catch(error => console.log(error.toString().charAt(1))
    )

    let mainGuild = client.guilds.cache.get("850228461330628608");

    if (!userGet || !userGet.username) return message.reply(new Discord.MessageEmbed().setDescription("Botunuzun ID'sini doğru yazdığınızdan emin olun. Böyle bir bot bulunmamaktadır.").setColor("RED"));
    if (!userGet.bot) return message.reply(new Discord.MessageEmbed().setDescription(`Bu bir bot ID'si değildir. Lütfen botun ID'sini yazınız.`).setColor("RED"));
    if (mainGuild.members.cache.filter(x => x.id === userGet.id).first() !== undefined) return message.reply(new Discord.MessageEmbed().setDescription(`Botunuz sunucumuzda zaten mevcuttur.`).setColor("RED"));


    let clickURL = `https://discord.com/oauth2/authorize?client_id=${args[1]}&scope=bot&permissions=0`

    message.channel.send(new Discord.MessageEmbed().setDescription(`**${message.author.username}** başarıyla \`${userGet.username}\` adlı botunuzu sunucuya ekleme isteği gönderdiniz.\n\n_Botun sunucuya eklenmesi 1-3 saat sürebilir._`).setColor("GREEN").setThumbnail(userGet.displayAvatarURL({ dynamic: true })))
    db.set(args[1], message.author.id)
    db.set(message.author.id, args[1])
    client.channels.cache.get("937063500675698718").send(
      new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}#${message.author.discriminator} [${message.author.id}]`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`Botun adı: **${userGet.username}**\n\nEklemek için: [Click Me!](${clickURL})`)
        .setColor("GREEN")
        .setTimestamp()
        .setFooter("Discord Project")
        .setThumbnail(userGet.displayAvatarURL())
    );




  },
};