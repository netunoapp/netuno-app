const { Interaction } = require("oceanic.js");
const App = require("../base/App");
const Event = require("../base/Event");

module.exports = new Event(
  "interactionCreate",

  /**
   *
   * @param {App} app
   * @param {Interaction} interaction
   * @returns
   */
  async (app, interaction) => {
    if (interaction.isAutocompleteInteraction()) {
      const autocomplete = app.autocompletes.get(interaction.data.name);
      if (autocomplete) {
        await autocomplete.run({ app, interaction });
      }
    }

    if (interaction.isComponentInteraction()) {
      const customID = interaction.data.customID
        .split("-")
        .join("")
        .replace(/\d+/g, "");
      const component = app.components.get(customID);
      const t = app.locales.get(interaction.locale);
      const author =
        interaction.member && interaction.member.user
          ? interaction.member.user
          : interaction.user;

      if (!t) {
        await interaction.defer(64);
        interaction.createFollowup({
          content: "Language not supported!",
        });
        return;
      }

      if (component) {
        await component.run({ t, app, author, interaction });
      }
    }

    if (interaction.isCommandInteraction()) {
      let name = interaction.data.name;
      const subcommand = interaction.data.options.getSubCommand();
      if (subcommand) name += subcommand.map((s) => ` ${s}`).join("");
      const t = app.locales.get(interaction.locale);
      const command = app.commands.get(name);
      const author =
        interaction.member && interaction.member.user
          ? interaction.member.user
          : interaction.user;

      if (!t) {
        await interaction.defer(64);
        interaction.createFollowup({
          content: "Language not supported!",
        });
        return;
      }

      if (command) {
        const ephemeral =
          interaction.data.options.getBoolean("ephemeral", false) ?? false;
        await interaction.defer(ephemeral ? 64 : 0);
        await command.run({ app, t, author, interaction });
      }
    }
  }
);
