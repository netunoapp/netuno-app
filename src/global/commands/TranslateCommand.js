"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const oceanic_js_1 = require("oceanic.js");
const Command_1 = __importDefault(require("../base/Command"));
exports.default = (0, Command_1.default)({
    type: oceanic_js_1.ApplicationCommandTypes.MESSAGE,
    name: "translate",
    nameLocalizations: {
        "pt-BR": "traduzir",
    },
    integrationTypes: [
        oceanic_js_1.ApplicationIntegrationTypes.GUILD_INSTALL,
        oceanic_js_1.ApplicationIntegrationTypes.USER_INSTALL
    ],
    contexts: [
        oceanic_js_1.InteractionContextTypes.BOT_DM,
        oceanic_js_1.InteractionContextTypes.GUILD,
        oceanic_js_1.InteractionContextTypes.PRIVATE_CHANNEL,
    ],
});
