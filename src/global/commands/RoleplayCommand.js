"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const oceanic_js_1 = require("oceanic.js");
const Command_1 = __importDefault(require("../base/Command"));
const UserOption_1 = __importDefault(require("../options/UserOption"));
exports.default = (0, Command_1.default)({
    type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT,
    name: "roleplay",
    nameLocalizations: {
        "pt-BR": "encenação",
    },
    description: "undefined",
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
            name: "hug",
            nameLocalizations: {
                "pt-BR": "abraçar",
            },
            description: "Hug a user.",
            descriptionLocalizations: {
                "pt-BR": "Abraçar um usuário.",
            },
            options: [(0, UserOption_1.default)(true)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "kiss",
            nameLocalizations: {
                "pt-BR": "beijar",
            },
            description: "Kiss a user.",
            descriptionLocalizations: {
                "pt-BR": "Beije um usuário.",
            },
            options: [(0, UserOption_1.default)(true)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "tickle",
            nameLocalizations: {
                "pt-BR": "cócegas",
            },
            description: "Tickle a user.",
            descriptionLocalizations: {
                "pt-BR": "Faça cócegas em um usuário.",
            },
            options: [(0, UserOption_1.default)(true)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "pat",
            nameLocalizations: {
                "pt-BR": "cafuné",
            },
            description: "Pat a user.",
            descriptionLocalizations: {
                "pt-BR": "Faça um cafuné em um usuário.",
            },
            options: [(0, UserOption_1.default)(true)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "slap",
            nameLocalizations: {
                "pt-BR": "tapa",
            },
            description: "Slap a user.",
            descriptionLocalizations: {
                "pt-BR": "Dê um tapa em um usuário.",
            },
            options: [(0, UserOption_1.default)(true)],
        },
    ],
});
