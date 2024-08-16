const { Client, Collection } = require("oceanic.js");
const Modal = require("./Modal");
const Command = require("./Command");
const Component = require("./Component");
const Autocomplete = require("./Autocomplete");
const enUS = require("../../locales/en-US.json");

module.exports = class App extends Client {
  /**
   *
   * @param {import("oceanic.js").ClientOptions} options
   */
  constructor(options) {
    super(options);
    this.init();
  }

  /**
   *
   * @param {Collection<string, Modal>} modals
   * @param {Collection<string, enUS>} locales
   * @param {Collection<string, Command>} commands
   * @param {Collection<string, Component>} components
   * @param {Collection<string, Autocomplete>} autocompletes
   * @param {Collection<string, any>} globalCommands
   */
  init(modals, locales, commands, components, autocompletes, globalCommands) {
    this.modals = modals;
    this.locales = locales;
    this.commands = commands;
    this.components = components;
    this.autocompletes = autocompletes;
    this.globalCommands = globalCommands;
  }
};
