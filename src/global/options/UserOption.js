"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const oceanic_js_1 = require("oceanic.js");
function default_1(required) {
    return {
        required,
        name: "user",
        nameLocalizations: {
            "pt-BR": "usuário",
        },
        description: "A Discord user.",
        descriptionLocalizations: {
            "pt-BR": "Um Usuário do discord.",
        },
        type: oceanic_js_1.ApplicationCommandOptionTypes.USER,
    };
}
