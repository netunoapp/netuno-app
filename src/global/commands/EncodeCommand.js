"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const oceanic_js_1 = require("oceanic.js");
const TextOption_1 = __importDefault(require("../options/TextOption"));
const Command_1 = __importDefault(require("../base/Command"));
const EphemeralOption_1 = __importDefault(require("../options/EphemeralOption"));
exports.default = (0, Command_1.default)({
    type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT,
    name: "encode",
    nameLocalizations: {
        "pt-BR": "códificar",
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
            name: "morse",
            description: "Encode to morse code.",
            descriptionLocalizations: {
                "pt-BR": "Códifique para código morse.",
            },
            options: [(0, TextOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "base64",
            description: "Encode to base64 code.",
            descriptionLocalizations: {
                "pt-BR": "Códifique para código base64.",
            },
            options: [(0, TextOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "binary",
            nameLocalizations: {
                "pt-BR": "binário",
            },
            description: "Encode to binary code.",
            descriptionLocalizations: {
                "pt-BR": "Códifique para código binário.",
            },
            options: [(0, TextOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
        },
    ],
});
