"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const oceanic_js_1 = require("oceanic.js");
const Command_1 = __importDefault(require("../base/Command"));
const AmountOption_1 = __importDefault(require("../options/AmountOption"));
const UserOption_1 = __importDefault(require("../options/UserOption"));
exports.default = (0, Command_1.default)({
    type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT,
    name: "purge",
    nameLocalizations: {
        "pt-BR": "limpar",
    },
    description: "undefined",
    dmPermission: false,
    defaultMemberPermissions: "8589934608",
    integrationTypes: [oceanic_js_1.ApplicationIntegrationTypes.GUILD_INSTALL],
    options: [
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "all",
            nameLocalizations: {
                "pt-BR": "tudo",
            },
            description: "Clear all channel messages.",
            descriptionLocalizations: {
                "pt-BR": "Limpe todas as mensagens do canal.",
            },
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND_GROUP,
            name: "messages",
            nameLocalizations: {
                "pt-BR": "mensagens",
            },
            description: "undefined",
            options: [
                {
                    type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                    name: "all",
                    nameLocalizations: {
                        "pt-BR": "tudo",
                    },
                    description: "Clear channel messages.",
                    descriptionLocalizations: {
                        "pt-BR": "Limpa mensagens do canal.",
                    },
                    options: [(0, AmountOption_1.default)(false)],
                },
                {
                    type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                    name: "user",
                    nameLocalizations: {
                        "pt-BR": "usuário",
                    },
                    description: "Clear channel user messages.",
                    descriptionLocalizations: {
                        "pt-BR": "Limpa mensagens de usuário do canal.",
                    },
                    options: [(0, UserOption_1.default)(true), (0, AmountOption_1.default)(false)],
                },
                {
                    type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                    name: "pinned",
                    nameLocalizations: {
                        "pt-BR": "fixadas",
                    },
                    description: "Clear channel pinned messages.",
                    descriptionLocalizations: {
                        "pt-BR": "Limpa mensagens fixadas do canal.",
                    },
                    options: [(0, AmountOption_1.default)(false)],
                },
                {
                    type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                    name: "unpinned",
                    nameLocalizations: {
                        "pt-BR": "não-fixadas",
                    },
                    description: "Clear channel unpinned messages.",
                    descriptionLocalizations: {
                        "pt-BR": "Limpa mensagens não fixadas do canal.",
                    },
                    options: [(0, AmountOption_1.default)(false)],
                },
                {
                    type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                    name: "users",
                    nameLocalizations: {
                        "pt-BR": "usuários",
                    },
                    description: "Clear channel users messages.",
                    descriptionLocalizations: {
                        "pt-BR": "Limpa mensagens de usuários do canal.",
                    },
                    options: [(0, AmountOption_1.default)(false)],
                },
                {
                    type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                    name: "apps",
                    nameLocalizations: {
                        "pt-BR": "aplicativos",
                    },
                    description: "Clear channel apps messages.",
                    descriptionLocalizations: {
                        "pt-BR": "Limpa mensagens de aplicativos do canal.",
                    },
                    options: [(0, AmountOption_1.default)(false)],
                },
            ],
        },
    ],
});
