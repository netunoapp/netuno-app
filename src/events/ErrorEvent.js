const App = require("../base/App");
const Event = require("../base/Event");

module.exports = new Event(
  "error",
  
  /**
   *
   * @param {App} app
   * @param {string | Error} error
   */
  async (app, error) => {
    console.log(error);
  }
);
