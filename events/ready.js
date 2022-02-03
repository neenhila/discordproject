const fs = require("fs")
const db = require("quick.db")
module.exports = {
  name: "ready",
  once: true,
  description: "Uygulama çalıştırıldığında çalışacak ilk kod yeri.",
  execute() {
    let commands = fs
      .readdirSync(`./commands`)
      .filter((file) => file.endsWith(".js"));
    console.log("--------++++++++++++--------");
    console.log("----------------------------");
    commands.forEach((x) => {
      console.log(`${x.slice(0, -3)} komutu başarıyla yüklendi.`);

    });

    if (!Array.isArray(db.get("linkleri"))) {
      db.set("linkleri", []);
    }
  },
};
