"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const oceanic_js_1 = require("oceanic.js");
function default_1(required) {
    return {
        required,
        name: "role",
        nameLocalizations: {
            "pt-BR": "cargo",
        },
        description: "Choose a role.",
        descriptionLocalizations: {
            "pt-BR": "Escolha um cargo.",
        },
        type: oceanic_js_1.ApplicationCommandOptionTypes.ROLE,
    };
}
