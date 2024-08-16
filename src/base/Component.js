const App = require("./App");
const { ComponentInteraction } = require("oceanic.js");
const enUS = require("../../locales/en-US.json");

module.exports = class Component {
  /**
   *
   * @param {String} name
   * @param {(context: { t: enUS, app: App, interaction: ComponentInteraction }) => Promise<void>} run
   */
  constructor(name, run) {
    this.name = name;
    this.run = run;
  }
};
