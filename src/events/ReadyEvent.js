const Event = require("../base/Event");

module.exports = new Event("ready", (app) => {
  console.log(`${app.user.username} is ready!`);

  app.globalCommands.forEach((command) => {
    app.application.createGlobalCommand(command).catch(console.log);
  });
});
