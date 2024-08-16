"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const oceanic_js_1 = require("oceanic.js");
function default_1(required) {
    return {
        required,
        name: "member",
        nameLocalizations: {
            "pt-BR": "membro",
        },
        description: "Choose a member.",
        descriptionLocalizations: {
            "pt-BR": "Escolha um membro.",
        },
        type: oceanic_js_1.ApplicationCommandOptionTypes.USER,
    };
}
