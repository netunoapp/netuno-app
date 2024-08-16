"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const oceanic_js_1 = require("oceanic.js");
const Command_1 = __importDefault(require("../base/Command"));
const EphemeralOption_1 = __importDefault(require("../options/EphemeralOption"));
exports.default = (0, Command_1.default)({
    type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT,
    name: "emoji",
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
            name: "info",
            description: "Emoji information.",
            descriptionLocalizations: {
                "pt-BR": "Informações sobre o emoji.",
            },
            options: [
                {
                    type: oceanic_js_1.ApplicationCommandOptionTypes.STRING,
                    required: true,
                    name: "emoji",
                    description: "The Emoji.",
                    descriptionLocalizations: {
                        "pt-BR": "O Emoji.",
                    },
                },
                (0, EphemeralOption_1.default)(false)
            ],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "view",
            nameLocalizations: {
                "pt-BR": "ver",
            },
            description: "See emoji.",
            descriptionLocalizations: {
                "pt-BR": "Veja o emoji.",
            },
            options: [
                {
                    type: oceanic_js_1.ApplicationCommandOptionTypes.STRING,
                    required: true,
                    name: "emoji",
                    description: "The Emoji.",
                    descriptionLocalizations: {
                        "pt-BR": "O Emoji.",
                    },
                },
                (0, EphemeralOption_1.default)(false)
            ],
        },
    ],
});
