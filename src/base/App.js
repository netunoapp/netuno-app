const { Client } = require("oceanic.js");

module.exports = class App extends Client {
    /**
     * 
     * @param {import("oceanic.js").ClientOptions} options 
     */
    constructor(options) {
        super(options);
        this.modals = new oceanic_js_1.Collection();
        this.locales = new oceanic_js_1.Collection();
        this.commands = new oceanic_js_1.Collection();
        this.components = new oceanic_js_1.Collection();
        this.autocompletes = new oceanic_js_1.Collection();
        this.globalCommands = new oceanic_js_1.Collection();
    }
}