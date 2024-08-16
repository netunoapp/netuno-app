"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const oceanic_js_1 = require("oceanic.js");
function default_1(required) {
    return {
        required,
        name: "image-url",
        nameLocalizations: {
            "pt-BR": "url-da-imagem",
        },
        description: "Image url.",
        descriptionLocalizations: {
            "pt-BR": "Url da imagem.",
        },
        type: oceanic_js_1.ApplicationCommandOptionTypes.STRING,
    };
}
