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
    name: "text",
    nameLocalizations: {
        "pt-BR": "texto",
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
            name: "anagram",
            nameLocalizations: {
                "pt-BR": "anagrama",
            },
            description: "Calculates the number of anagrams in the word.",
            descriptionLocalizations: {
                "pt-BR": "Calcula o número de anagramas na palavra.",
            },
            options: [(0, TextOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "lowercase",
            nameLocalizations: {
                "pt-BR": "minúsculo",
            },
            description: "Make letters lowercase..",
            descriptionLocalizations: {
                "pt-BR": "Deixe as letras minúsculas.",
            },
            options: [(0, TextOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "uppercase",
            nameLocalizations: {
                "pt-BR": "maiúsculo",
            },
            description: "Make letters uppercase.",
            descriptionLocalizations: {
                "pt-BR": "Deixe as letras maiúsculas.",
            },
            options: [(0, TextOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "reverse",
            nameLocalizations: {
                "pt-BR": "inverso",
            },
            description: "Make the text reversed.",
            descriptionLocalizations: {
                "pt-BR": "Deixe o texto invertido.",
            },
            options: [(0, TextOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "vaporwave",
            nameLocalizations: {
                "pt-BR": "vaporonda",
            },
            description: "Change the text font to vaporwave.",
            descriptionLocalizations: {
                "pt-BR": "Altere a fonte do texto para vaporonda.",
            },
            options: [(0, TextOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "quality",
            nameLocalizations: {
                "pt-BR": "qualidade",
            },
            description: "Change the text font to quality.",
            descriptionLocalizations: {
                "pt-BR": "Altere a fonte do texto para qualidade.",
            },
            options: [(0, TextOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
        },
        {
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "translate",
            nameLocalizations: {
                "pt-BR": "traduzir",
            },
            description: "Translation tool.",
            descriptionLocalizations: {
                "pt-BR": "Ferramenta de tradução.",
            },
            options: [
                {
                    required: true,
                    type: oceanic_js_1.ApplicationCommandOptionTypes.STRING,
                    name: "to",
                    autocomplete: true,
                    nameLocalizations: {
                        "pt-BR": "para",
                    },
                    description: "Translate to?",
                    descriptionLocalizations: {
                        "pt-BR": "Traduzir para?",
                    },
                },
                (0, TextOption_1.default)(true),
                (0, EphemeralOption_1.default)(false),
            ],
        },
    ],
});
