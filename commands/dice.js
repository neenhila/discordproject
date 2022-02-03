
module.exports = {
  name: "dice",
  usage: `${process.env.prefix}zar`,
  description: "Zar atmanızı sağlar. (32'lik zar için !zar 32 yazabilirsiniz.)",
  execute(message) {
    message.delete().catch(e => console.log(e))
    const args = message.content.split(" ").slice();
    if (args[1] && args[1] === "32") {
      var zar32 = Math.floor(Math.random() * 32) + 1;
      message.channel.send(`32'lik zar atıldı ve zar \`${zar32}\` geldi.`).then(msj => msj.delete({timeout: 5000}).catch(e => console.log(e)))
    } else {
      var zar = Math.floor(Math.random() * 6) + 1;
      message.channel.send(`Zar atıldı ve zar \`${zar}\` geldi.`).then(msj => msj.delete({timeout: 5000}).catch(e => console.log("" + e)))
    }
  },
};


//🎲