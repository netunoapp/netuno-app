const { ChatInputCommandInteraction, MessageContextMenuCommandInteraction, UserContextMenuCommandInteraction } = require("discord.js");
const App = require("./App");

module.exports = class Command {
  /**
   *
   * @param {String} name
   * @param {(context: { t: any, app: App, interaction: ChatInputCommandInteraction<import("discord.js").CacheType> | MessageContextMenuCommandInteraction<import("discord.js").CacheType> | UserContextMenuCommandInteraction<import("discord.js").CacheType> }) => Promise<void>} run
   */
  constructor(name, run) {
    this.name = name;
    this.run = run;
  }
};
