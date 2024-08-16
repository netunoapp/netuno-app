const Event = require("../base/Event");

module.exports = new Event("disconnect", async (app) => {
  app.connect();
});
