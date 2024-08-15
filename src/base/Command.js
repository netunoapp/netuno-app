const {
  ChatInputCommandInteraction,
  MessageContextMenuCommandInteraction,
  UserContextMenuCommandInteraction,
} = require("discord.js");
const enUS = require("../../locales/en-US.json");
const App = require("./App");

module.exports = class Command {
  /**
   *
   * @param {String} name
   * @param {(context: { t: enUS, app: App, interaction: ChatInputCommandInteraction<import("discord.js").CacheType> | MessageContextMenuCommandInteraction<import("discord.js").CacheType> | UserContextMenuCommandInteraction<import("discord.js").CacheType> }) => Promise<void>} run
   */
  constructor(name, run) {
    this.name = name;
    this.run = run;
  }
};
