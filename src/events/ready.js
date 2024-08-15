const Event = require("../base/Event");

module.exports = new Event("ready", async (app) => {
  console.log(`${app.user.username} está online!`.bgGreen);
});
