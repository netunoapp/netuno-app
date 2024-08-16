const App = require("./App");
const { AutocompleteInteraction } = require("oceanic.js");
const enUS = require("../../locales/en-US.json");

module.exports = class Autocomplete {
  /**
   *
   * @param {String} name
   * @param {(context: { t: enUS, app: App, interaction: AutocompleteInteraction }) => Promise<void>} run
   */
  constructor(name, run) {
    this.name = name;
    this.run = run;
  }
};
