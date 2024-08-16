"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const oceanic_js_1 = require("oceanic.js");
function default_1(required) {
    return {
        required,
        minValue: 2,
        maxValue: 2000,
        name: "amount",
        nameLocalizations: {
            "pt-BR": "quantidade",
        },
        description: "Amount of messages you want to delete.",
        descriptionLocalizations: {
            "pt-BR": "Quantidade de mensagens que você deseja excluir.",
        },
        type: oceanic_js_1.ApplicationCommandOptionTypes.INTEGER,
    };
}
