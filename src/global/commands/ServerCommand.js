"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const oceanic_js_1 = require("oceanic.js");
const Command_1 = __importDefault(require("../base/Command"));
const MemberOption_1 = __importDefault(require("../options/MemberOption"));
const ChannelOption_1 = __importDefault(require("../options/ChannelOption"));
const RoleOption_1 = __importDefault(require("../options/RoleOption"));
const EphemeralOption_1 = __importDefault(require("../options/EphemeralOption"));
exports.default = (0, Command_1.default)({
    type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT,
    name: "server",
    nameLocalizations: {
        "pt-BR": "servidor",
    },
    description: "undefined",
    dmPermission: false,
    integrationTypes: [oceanic_js_1.ApplicationIntegrationTypes.GUILD_INSTALL],
    options: [
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "info",
            description: "Server information.",
            descriptionLocalizations: {
                "pt-BR": "Informações sobre o servidor.",
            },
            options: [(0, EphemeralOption_1.default)(false)]
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "icon",
            nameLocalizations: {
                "pt-BR": "ícone",
            },
            description: "See the server icon.",
            descriptionLocalizations: {
                "pt-BR": "Veja o ícone do servidor.",
            },
            options: [(0, EphemeralOption_1.default)(false)]
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "banner",
            nameLocalizations: {
                "pt-BR": "estandarte",
            },
            description: "See the server banner.",
            descriptionLocalizations: {
                "pt-BR": "Veja o estandarte do servidor.",
            },
            options: [(0, EphemeralOption_1.default)(false)]
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "splash",
            nameLocalizations: {
                "pt-BR": "estandarte-de-convite",
            },
            description: "See the server splash.",
            descriptionLocalizations: {
                "pt-BR": "Veja o estandarte de convite do servidor.",
            },
            options: [(0, EphemeralOption_1.default)(false)]
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "discovery",
            nameLocalizations: {
                "pt-BR": "estandarte-de-descoberta",
            },
            description: "See the server discovery splash.",
            descriptionLocalizations: {
                "pt-BR": "Veja o estandarte de descoberta do servidor.",
            },
            options: [(0, EphemeralOption_1.default)(false)]
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "vinaty",
            nameLocalizations: {
                "pt-BR": "url-customizada",
            },
            description: "See the server vinary url.",
            descriptionLocalizations: {
                "pt-BR": "Veja a url customizada do servidor.",
            },
            options: [(0, EphemeralOption_1.default)(false)]
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND_GROUP,
            name: "member",
            nameLocalizations: {
                "pt-BR": "membro",
            },
            description: "undefined",
            options: [
                {
                    type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                    name: "info",
                    description: "Member Information.",
                    descriptionLocalizations: {
                        "pt-BR": "Informações sobre o membro.",
                    },
                    options: [(0, MemberOption_1.default)(false), (0, EphemeralOption_1.default)(false)],
                },
                {
                    type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                    name: "avatar",
                    description: "See member avatar.",
                    descriptionLocalizations: {
                        "pt-BR": "Veja o avatar do membro.",
                    },
                    options: [(0, MemberOption_1.default)(false), (0, EphemeralOption_1.default)(false)],
                },
                {
                    type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                    name: "banner",
                    nameLocalizations: {
                        "pt-BR": "estandarte",
                    },
                    description: "See member banner.",
                    descriptionLocalizations: {
                        "pt-BR": "Veja o estandarte do membro.",
                    },
                    options: [(0, MemberOption_1.default)(false), (0, EphemeralOption_1.default)(false)],
                },
            ],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND_GROUP,
            name: "channel",
            nameLocalizations: {
                "pt-BR": "canal"
            },
            description: "undefined",
            options: [{
                    type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                    name: "info",
                    description: "Channel Information.",
                    descriptionLocalizations: {
                        "pt-BR": "Informações sobre o canal."
                    },
                    options: [(0, ChannelOption_1.default)(false), (0, EphemeralOption_1.default)(false)]
                }]
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND_GROUP,
            name: "role",
            nameLocalizations: {
                "pt-BR": "cargo"
            },
            description: "undefined",
            options: [{
                    type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                    name: "info",
                    description: "Role Information.",
                    descriptionLocalizations: {
                        "pt-BR": "Informações sobre um cargo."
                    },
                    options: [(0, RoleOption_1.default)(true), (0, EphemeralOption_1.default)(false)]
                }, {
                    type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                    name: "icon",
                    nameLocalizations: {
                        "pt-BR": "ícone"
                    },
                    description: "See role icon.",
                    descriptionLocalizations: {
                        "pt-BR": "Veja o ícone do cargo."
                    },
                    options: [(0, RoleOption_1.default)(true), (0, EphemeralOption_1.default)(false)]
                }]
        }
    ],
});
