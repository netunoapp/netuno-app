"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const oceanic_js_1 = require("oceanic.js");
const Command_1 = __importDefault(require("../base/Command"));
const UserOption_1 = __importDefault(require("../options/UserOption"));
const EphemeralOption_1 = __importDefault(require("../options/EphemeralOption"));
exports.default = (0, Command_1.default)({
    name: "user",
    nameLocalizations: {
        "pt-BR": "usuário",
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
    type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT,
    options: [
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "info",
            description: "Information about the user.",
            descriptionLocalizations: {
                "pt-BR": "Informações sobre o usuário.",
            },
            options: [(0, UserOption_1.default)(false), (0, EphemeralOption_1.default)(false)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "banner",
            nameLocalizations: {
                "pt-BR": "estandarte"
            },
            description: "See user banner.",
            descriptionLocalizations: {
                "pt-BR": "Veja o estandarte do usuário.",
            },
            options: [(0, UserOption_1.default)(false), (0, EphemeralOption_1.default)(false)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "avatar",
            description: "See user avatar.",
            descriptionLocalizations: {
                "pt-BR": "Veja o avatar do usuário.",
            },
            options: [(0, UserOption_1.default)(false), (0, EphemeralOption_1.default)(false)],
        },
    ],
});
