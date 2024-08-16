"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const oceanic_js_1 = require("oceanic.js");
function default_1(required) {
    return {
        required,
        name: "channel",
        nameLocalizations: {
            "pt-BR": "canal",
        },
        description: "Choose a channel.",
        descriptionLocalizations: {
            "pt-BR": "Escolha um canal.",
        },
        type: oceanic_js_1.ApplicationCommandOptionTypes.CHANNEL,
    };
}
