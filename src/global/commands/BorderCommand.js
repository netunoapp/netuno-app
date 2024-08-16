"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const oceanic_js_1 = require("oceanic.js");
const Command_1 = __importDefault(require("../base/Command"));
const ImageOption_1 = __importDefault(require("../options/ImageOption"));
const EphemeralOption_1 = __importDefault(require("../options/EphemeralOption"));
exports.default = (0, Command_1.default)({
    name: "border",
    nameLocalizations: {
        "pt-BR": "borda",
    },
    description: "undefined",
    type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT,
    integrationTypes: [
        oceanic_js_1.ApplicationIntegrationTypes.GUILD_INSTALL,
        oceanic_js_1.ApplicationIntegrationTypes.USER_INSTALL,
    ],
    contexts: [
        oceanic_js_1.InteractionContextTypes.BOT_DM,
        oceanic_js_1.InteractionContextTypes.GUILD,
        oceanic_js_1.InteractionContextTypes.PRIVATE_CHANNEL,
    ],
    options: [
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "bisexual",
            nameLocalizations: {
                "pt-BR": "bissexual",
            },
            description: "Add bisexual border to image.",
            descriptionLocalizations: {
                "pt-BR": "Adicione borda bissexual à imagem.",
            },
            options: [(0, ImageOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "lesbian",
            nameLocalizations: {
                "pt-BR": "lésbica",
            },
            description: "Add lesbian border to image.",
            descriptionLocalizations: {
                "pt-BR": "Adicione borda lésbica à imagem.",
            },
            options: [(0, ImageOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "non-binary",
            nameLocalizations: {
                "pt-BR": "não-binário",
            },
            description: "Add non binary border to image.",
            descriptionLocalizations: {
                "pt-BR": "Adicione borda não binário à imagem.",
            },
            options: [(0, ImageOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "transgender",
            nameLocalizations: {
                "pt-BR": "transgênero",
            },
            description: "Add transgender border to image.",
            descriptionLocalizations: {
                "pt-BR": "Adicione borda transgênero à imagem.",
            },
            options: [(0, ImageOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "round",
            nameLocalizations: {
                "pt-BR": "rendonda",
            },
            description: "Add round border to image.",
            descriptionLocalizations: {
                "pt-BR": "Adicione borda redonda à imagem.",
            },
            options: [(0, ImageOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "gay",
            description: "Add gay border to image.",
            descriptionLocalizations: {
                "pt-BR": "Adicione borda gay à imagem.",
            },
            options: [(0, ImageOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "agender",
            nameLocalizations: {
                "pt-BR": "agênero"
            },
            description: "Add agender border to image.",
            descriptionLocalizations: {
                "pt-BR": "Adicione borda agênero à imagem.",
            },
            options: [(0, ImageOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "genderfluid",
            nameLocalizations: {
                "pt-BR": "gênero-fluído"
            },
            description: "Add genderfluid border to image.",
            descriptionLocalizations: {
                "pt-BR": "Adicione borda gênero fluído à imagem.",
            },
            options: [(0, ImageOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "pansexual",
            description: "Add pansexual border to image.",
            descriptionLocalizations: {
                "pt-BR": "Adicione borda pansexual à imagem.",
            },
            options: [(0, ImageOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "lgbt",
            description: "Add lgbt border to image.",
            descriptionLocalizations: {
                "pt-BR": "Adicione borda lgbt à imagem.",
            },
            options: [(0, ImageOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
        },
    ],
});
