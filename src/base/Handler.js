const { resolve } = require("path");
const { globSync } = require("glob");
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
   * @param {string | string[]} pattern
   */
  async loadEvents(pattern) {
    for (const dir of globSync(pattern)) {
      const event = require(resolve(dir));

      this.app[event.type](event.name, async (...args) => {
        await event.run(...args);
      });
    }
  }
};
