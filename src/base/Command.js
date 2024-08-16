const App = require("./App");
const { CommandInteraction, User } = require("oceanic.js");
const enUS = require("../../locales/en-US.json");

module.exports = class Command {
  /**
   *
   * @param {String} name
   * @param {(context: { t: enUS, app: App, author: User, interaction: CommandInteraction })} run
   */
  constructor(name, run) {
    this.name = name;
    this.run = run;
  }
};
