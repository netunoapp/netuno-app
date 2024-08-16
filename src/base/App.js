"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const oceanic_js_1 = require("oceanic.js");
class App extends oceanic_js_1.Client {
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
exports.default = App;
