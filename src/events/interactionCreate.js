const App = require("../base/App");
const Event = require("../base/Event");

module.exports = new Event(
  "interactionCreate",
  /**
   *
   * @param {App} app
   * @param {import("discord.js").Interaction<import("discord.js").CacheType>} interaction
   */
  async (app, interaction) => {
    if (interaction.isChatInputCommand()) {
      let name = interaction.commandName;

      const command = app.commands.get(name);

      if (command) {
        await command.run({ app, interaction });
      }
    }
  }
);
