const { Client, Collection } = require("discord.js");

module.exports = class App extends Client {
  /**
   *
   * @param {import("discord.js").ClientOptions} options
   */
  constructor(options) {
    super(options);
    this.commands = new Collection();
  }
};
