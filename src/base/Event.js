const App = require("./App");

module.exports = class Event {
  /**
   *
   * @param {keyof import("discord.js").ClientEvents} name
   * @param {(app: App, ...args: any[]) => Promise<void>} run
   * @param {"on" | "once"} type
   */
  constructor(name, run, type = "on") {
    this.run = run;
    this.name = name;
    this.type = type;
  }
};
