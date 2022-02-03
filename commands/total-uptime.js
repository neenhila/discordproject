const db = require("quick.db")

module.exports = {
    name: "total-uptime",
    usage: `${process.env.prefix}total-uptime`,
    description: "Uptime limitimizi gösterir.",
    execute(message) {
        var spl = message.content.split(" ");

        var link = spl[1];
        message.channel.send(`Uptime limit durumumuz: **${db.get("linkleri").length} / 1000**`);

    },
};
