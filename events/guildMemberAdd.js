const db = require("quick.db")
const { client } = require("../index.js")
const Discord = require("discord.js")

module.exports = {
  name: "guildMemberAdd",
  once: false,
  description: "Sunucuya birisi katıldığında yapılacaklar.",
  execute(member) {
    if(member.user.bot){

   member.roles.add(`853928347884322816`).catch(error=> console.log(error))

   client.channels.cache.get("937319658858643489").send(new Discord.MessageEmbed().setDescription(`${member.user} adlı bot başarıyla sunucumuza eklenmiştir.\n\nEkleyen kişi: <@!${db.get(`${member.user.id}`)}>`).setColor("BLUE").setThumbnail(member.user.displayAvatarURL()).setTimestamp())

   return;
    }
    member.user.send(`Sunucumuza hoşgeldin.\n\nBotunu 7/24 aktif tutmak istiyorsan, <#937299562727620669> kanalına bakabilirsin.\n\nSunucuda pek kural yok, sadece başkalarının keyfini kaçırma yeter ♥\n\n_Lucid Development & BotList_`).catch(error => console.log(error.toString().charAt(0)))
    member.roles.add("853931058248417310").catch(error => console.log(error.toString().charAt(0)))
    client.channels.cache.get("937100158263525426").setName(`𝕸𝖊𝖒𝖇𝖊𝖗𝖘: ${member.guild.members.cache.size}`).catch(error => console.log(error))
    client.channels.cache.get("937100167641989190").setName(`𝕭𝖔𝖙𝖘: ${member.guild.members.cache.filter(x => x.user.bot).size}`).catch(error => console.log(error))
    client.channels.cache.get("937100180111634472").setName(`𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕹𝖊𝖊𝖓𝖍𝖎𝖑𝖆 Ⓒ`).catch(error => console.log(error))
  },
};
