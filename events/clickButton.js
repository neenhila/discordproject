const message = require("./message.js");
const disbut = require("discord-buttons");
const Discord = require("discord.js");
module.exports = {
  name: "clickButton",
  once: false,
  description: "Butonların kontrolünü sağlar.",
  async execute(btn) {
    await btn.reply.defer();
    if (btn.id === "at") {
      let userClicked = await coinOwners.get(`${btn.message.id}`);
      if (btn.clicker.id !== userClicked) return;
      if (Math.random() < 0.5) {
        secenek = "Tura"
      } else {
        secenek = "Yazı"
      }
      btn.channel.send(`${secenek}`).then(msj => msj.delete({ timeout: 2500 }).catch(error => console.log(error))).catch(error => console.log(error))
    } else if (btn.id === "kapat") {
      let userClicked = await coinOwners.get(`${btn.message.id}`);
      if (btn.clicker.id !== userClicked) return;

      btn.message.delete().catch(error => console.log(error))
    }
  },
};
