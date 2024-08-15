const { ChatInputCommandInteraction } = require("discord.js");
const App = require("./App");

module.exports = class Command {
  /**
   *
   * @param {String} name
   * @param {(context: { app: App, interaction: ChatInputCommandInteraction<import("discord.js").CacheType> }) => Promise<void>} run
   */
  constructor(name, run) {
    this.name = name;
    this.run = run;
  }
};
