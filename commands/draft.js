
module.exports = {
  name: "Yardım komutu",
  usage: `${process.env.prefix}qweqwe213131`,
  description: "Bot hakkında bilgileri içeren komuttur.",
  execute(message) {
    message.channel.send(`!toss`);
  },
};
