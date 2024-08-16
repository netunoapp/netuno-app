const App = require("./App");
const { CommandInteraction } = require("oceanic.js");
const enUS = require("../../locales/en-US.json");

module.exports = class Command {
  /**
   *
   * @param {String} name
   * @param {(context: { t: enUS, app: App, interaction: CommandInteraction })} run
   */
  constructor(name, run) {
    this.name = name;
    this.run = run;
  }
};
