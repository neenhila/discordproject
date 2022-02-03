const {client} = require("../index.js")
module.exports = {
  name:  "update",
  usage: `${process.env.prefix}update`,
  description: "Stats channels",
  execute(message) {
    client.channels.cache.get("937100158263525426").setName(`𝕸𝖊𝖒𝖇𝖊𝖗𝖘: ${message.guild.members.cache.size}`).catch(error => console.log(error))
    client.channels.cache.get("937100167641989190").setName(`𝕭𝖔𝖙𝖘: ${message.guild.members.cache.filter(x => x.user.bot).size}`).catch(error => console.log(error))
    client.channels.cache.get("937100180111634472").setName(`𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕹𝖊𝖊𝖓𝖍𝖎𝖑𝖆 Ⓒ`).catch(error => console.log(error))
    client.channels.cache.get("937702514797740052").setName(`𝕺𝖓𝖑𝖎𝖓𝖊 𝕸𝖊𝖒𝖇𝖊𝖗𝖘: ${message.guild.members.cache.filter(x => x.user.presence.status === "online").size}`)
  },
};
