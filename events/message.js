const prefix = "!";
const fs = require("fs");
const Discord = require("discord.js")
const db = require("quick.db");
const disbut = require("discord-buttons")
const { client } = require("../index.js")
const cooldowns = new Discord.Collection();

let commands = new Discord.Collection();

module.exports = { commands };
let commandFiles = fs
  .readdirSync(`./commands`)
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`../commands/${file}`);
  commands.set(command.usage, command);
}

module.exports = {
  name: "message",
  once: false,
  description: "Mesaj eventidir.",
  async execute(message) {
    if (message.author.bot) return;
    if(message.content.toLowerCase().includes("discord.gg")) || if(message.content.toLowerCase().includes("dc.gg")) || if(message.content.toLowerCase().includes("discord.com")){
      if(message.member.permissions.has("ADMINISTRATOR")) return;
      let uyari = db.get(`reklamUyari_${message.author.id}`);
      if(uyari && uyari === 2){
        message.delete();
        message.reply("Seni daha önce 2 kez uyardım. Artık sınırı aştın!").then(msg => msg.delete({timeout: 5000}))
        setTimeout(() => {
          message.member.ban({reason: `Reklam | ${message.content}`});
        }, 2000)
        return;
        
      } else if(uyari && uyari === 1){
        message.delete();
        message.reply(`Reklam yapma, daha önce uyarmıştım. Tekrar etmemeni tavsiye ederim.`).then(msg => msg.delete({timeout: 5000}))
        db.add(`reklamUyari_${message.author.id}`, 1)
        return;
      } else {
      
      
      message.delete();
      message.reply("Reklam yapma, yoksa sonu kötü olur.").then(msg => msg.delete({timeout: 5000}))
      db.add(`reklamUyari_${message.author.id}`, 1);
      return;
      }
    }

    const args = message.content.toLowerCase().slice().split(" ");

    
    if (!commands.has(args[0])) return;
    let command = await commands.get(args[0]);
    let fileName = command.name;
    if(!cooldowns.has(fileName)){

            cooldowns.set(fileName, new Discord.Collection())
        }
        const f = require(`../commands/${fileName}.js`)
        const now = Date.now();
        const timestamps = cooldowns.get(fileName);
        if(!f.cooldown){cd = 5} else {cd = f.cooldown}
        
        const cooldownAmount = (cd) * 1000;

        if(timestamps.has(message.author.id)){
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

            if(now < expirationTime){
                const timeLeft = (expirationTime - now) / 1000;
                return message.reply(`Komutu yeniden kullanabilmek için beklemeniz gereken süre \`${timeLeft}\` saniyedir.`)
            }
        }

        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    if (!message.guild) {
      message.channel.send("Lütfen tek bir mesaj halinde şikayetinizi yazınız. Bir mesaj içerisinde olmasına özen gösterin ve anlaşılır bir dil ile ifade edin. Türkçe / İngilizce kullanabilirsiniz.")
      filter = x => !x.author.bot
      message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ["TIME"] }).then(sikayet => {
        if (!sikayet) return message.reply("Yeterli süre içerisinde cevaplamadığınız için şikayetiniz kapatılmıştır. Yeniden oluşturmak için şikayet edeceğiniz komutu burada kullanın.");

        let embed = new Discord.MessageEmbed()
          .setDescription(`**${args[0]}**, komutu hakkında şikayet geldi.\n\n\nŞikayet: \`${sikayet.first().content}\``)
          .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL({ dynamic: true }))
          .setFooter("Discord Project")
          .setTimestamp()

        message.channel.send("Mesajınız alındı.");
        let logChannel = client.channels.cache.get("936758516113342565");
        logChannel.send(embed)
      })


    } else {
      commands
        .get(args[0])
        .execute(message, Discord, args, db, disbut)
    }
  },
};
