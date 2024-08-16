"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const oceanic_js_1 = require("oceanic.js");
function default_1(required) {
    return {
        required,
        name: "ephemeral",
        nameLocalizations: {
            "pt-BR": "efêmero",
        },
        description: "Will the message be ephemeral?",
        descriptionLocalizations: {
            "pt-BR": "A mensagem será efêmera?",
        },
        type: oceanic_js_1.ApplicationCommandOptionTypes.BOOLEAN,
    };
}
