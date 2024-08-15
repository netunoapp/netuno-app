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
      const subcommand = interaction.options.getSubcommand(false);

      if (subcommand) name += ` ${subcommand}`;

      const command = app.commands.get(name);

      if (command) {
        const ephemeral =
          interaction.options.getBoolean("ephemeral", false) ?? false;
        await interaction.deferReply({ ephemeral });

        await command.run({ app, interaction });
      }
    }
  }
);
