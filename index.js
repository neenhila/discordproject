const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const prefix = "!";
const disbut = require("discord-buttons")
disbut(client)
const db = require("quick.db");
client.login(process.env.token);
const fetch = require("node-fetch");

setInterval(() => {
  var links = db.get("linkleri");
  if (!links) return;
  var linkA = links.map(c => c.url);
  linkA.forEach(link => {
    try {
      fetch(link);
    } catch (e) {
      console.log("" + e);
    }
  });

}, 60000);


module.exports = { client };


const eventFiles = fs
  .readdirSync(`./events`)
  .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}
