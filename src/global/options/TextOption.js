"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const oceanic_js_1 = require("oceanic.js");
function default_1(required) {
    return {
        required,
        name: "text",
        nameLocalizations: {
            "pt-BR": "texto",
        },
        description: "The text.",
        descriptionLocalizations: {
            "pt-BR": "O Texto.",
        },
        type: oceanic_js_1.ApplicationCommandOptionTypes.STRING,
    };
}
