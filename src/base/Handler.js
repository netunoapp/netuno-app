const { globSync } = require("glob");
const { resolve } = require("path");
const App = require("./App");

module.exports = class Handler {
  /**
   * 
   * @param {App} app 
   */
  constructor(app) {
    this.app = app;
  }

  /**
   * 
   * @param {String | String[]} pattern 
   */
  async loadEvents(pattern) {
    for (const dir of globSync(pattern)) {
      const event = require(resolve(dir));

      delete require.cache[dir];

      this.app[event.type](event.name, (...args) =>
        event.run(this.app, ...args)
      );
    }
  }

  /**
   * 
   * @param {String | String[]} pattern 
   */
  async loadAutocompletes(pattern) {
    for (const dir of globSync(pattern)) {
      const autocomplete = require(resolve(dir));

      delete require.cache[dir];

      this.app.autocompletes.set(autocomplete.name, autocomplete);
    }
  }

  /**
   * 
   * @param {String | String[]} pattern 
   */
  async loadComponents(pattern) {
    for (const dir of globSync(pattern)) {
      const component = require(resolve(dir));

      delete require.cache[dir];

      this.app.components.set(component.name, component);
    }
  }

  /**
   * 
   * @param {String | String[]} pattern 
   */
  async loadModals(pattern) {
    for (const dir of globSync(pattern)) {
      const modal = require(resolve(dir));

      delete require.cache[dir];

      this.app.modals.set(modal.name, modal);
    }
  }

  /**
   * 
   * @param {String | String[]} pattern 
   */
  async loadCommands(pattern) {
    for (const dir of globSync(pattern)) {
      const command = require(resolve(dir));

      delete require.cache[dir];

      this.app.commands.set(command.name, command);
    }
  }

  /**
   * 
   * @param {String | String[]} pattern 
   */
  async loadGlobalCommands(pattern) {
    for (const dir of globSync(pattern)) {
      const command = require(resolve(dir));

      delete require.cache[dir];

      this.app.globalCommands.set(command.name, command);
    }
  }

  /**
   * 
   * @param {String | String[]} pattern 
   */
  async loadLocales(pattern) {
    for (const dir of globSync(pattern)) {
      const locale = require(resolve(dir));

      delete require.cache[dir];

      this.app.locales.set(locale.locale, locale);
    }
  }
};
