const App = require("./App");

module.exports = class Event {
  /**
   *
   * @param {keyof import("oceanic.js").ClientEvents} name
   * @param {(app: App, ...args: import("oceanic.js").ClientEvents[name]) => Promise<void>} run
   * @param {"on" | "once"} type
   */
  constructor(name, run, type = "on") {
    this.type = type;
    this.run = run;
    this.name = name;
  }
};
