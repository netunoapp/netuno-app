const App = require("./App");
const { ModalSubmitInteraction } = require("oceanic.js");
const enUS = require("../../locales/en-US.json");

module.exports = class Modal {
  /**
   * 
   * @param {String} name 
   * @param {(context: { t: enUS, app: App, interaction: ModalSubmitInteraction }) => Promise<void>} run 
   */
  constructor(name, run) {
    this.name = name;
    this.run = run;
  }
};
