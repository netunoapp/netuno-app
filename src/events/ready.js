const Event = require("../base/Event");

module.exports = new Event("ready", async (app) => {
  console.log(`${app.user.username} está online!`.bgGreen);

  app.user.setPresence({
    activities: [{ type: 1, name: "Em breve estárei de volta ;)" }],
  });
});
