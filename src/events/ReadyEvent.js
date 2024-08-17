const Event = require("../base/Event");

module.exports = new Event("ready", async (app) => {
  console.log(`${app.user.username} is ready!`);

  app.globalCommands.forEach((command) => {
    app.application.createGlobalCommand(command).catch((error) => {
      console.log(`${command.name} Error --> ${error}`);
    });
  });
});
