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
    name: "ping",
    description: "See a latency.",
    descriptionLocalizations: {
        "pt-BR": "Veja minha latência.",
    },
    integrationTypes: [oceanic_js_1.ApplicationIntegrationTypes.GUILD_INSTALL],
    options: [(0, EphemeralOption_1.default)(false)]
});
