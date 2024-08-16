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
    name: "app",
    description: "undefined",
    contexts: [
        oceanic_js_1.InteractionContextTypes.BOT_DM,
        oceanic_js_1.InteractionContextTypes.GUILD,
        oceanic_js_1.InteractionContextTypes.PRIVATE_CHANNEL,
    ],
    integrationTypes: [
        oceanic_js_1.ApplicationIntegrationTypes.GUILD_INSTALL,
        oceanic_js_1.ApplicationIntegrationTypes.USER_INSTALL,
    ],
    type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT,
    options: [
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "info",
            description: "Information about an application.",
            descriptionLocalizations: {
                "pt-BR": "Informações sobre um aplicativo",
            },
            options: [(0, UserOption_1.default)(true), (0, EphemeralOption_1.default)(false)]
        },
    ],
});
