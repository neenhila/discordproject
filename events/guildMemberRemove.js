const db = require("quick.db")
const { client } = require("../index.js")
const Discord = require("discord.js")

module.exports = {
  name: "guildMemberRemove",
  once: false,
  description: "Sunucudan birisi çıktığında yapılacaklar",
  execute(member) {
    let botID = db.get(member.user.id);
    if(botID){
      member.guild.members.cache.get(botID).kick().catch(error => console.log(error))
    }

    client.channels.cache.get("937100158263525426").setName(`𝕸𝖊𝖒𝖇𝖊𝖗𝖘: ${member.guild.members.cache.size}`).catch(error => console.log(error))
    client.channels.cache.get("937100167641989190").setName(`𝕭𝖔𝖙𝖘: ${member.guild.members.cache.filter(x => x.user.bot).size}`).catch(error => console.log(error))
    client.channels.cache.get("937100180111634472").setName(`𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕹𝖊𝖊𝖓𝖍𝖎𝖑𝖆 Ⓒ`).catch(error => console.log(error))
  },
};
