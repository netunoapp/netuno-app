"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const oceanic_js_1 = require("oceanic.js");
const Command_1 = __importDefault(require("../base/Command"));
const ImageOption_1 = __importDefault(require("../options/ImageOption"));
const EphemeralOption_1 = __importDefault(require("../options/EphemeralOption"));
exports.default = (0, Command_1.default)({
    name: "filter",
    nameLocalizations: {
        "pt-BR": "filtro",
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
            description: "Apply grayscale filter to an image.",
            name: "greyscale",
            nameLocalizations: {
                "pt-BR": "escala-de-cinza",
            },
            descriptionLocalizations: {
                "pt-BR": "Aplicar filtro escala de cinza a uma imagem.",
            },
            options: [(0, ImageOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
        },
        {
            description: "Apply invert filter to an image.",
            name: "invert",
            nameLocalizations: {
                "pt-BR": "invertido",
            },
            descriptionLocalizations: {
                "pt-BR": "Aplicar filtro invertido a uma imagem.",
            },
            options: [(0, ImageOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
        },
        {
            description: "Apply silhouette filtro to an image.",
            name: "silhouette",
            nameLocalizations: {
                "pt-BR": "silhueta",
            },
            descriptionLocalizations: {
                "pt-BR": "Aplicar filtro silhueta a uma imagem.",
            },
            options: [(0, ImageOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
        },
        {
            description: "Apply sepia filter to an image.",
            name: "sepia",
            nameLocalizations: {
                "pt-BR": "sépia",
            },
            descriptionLocalizations: {
                "pt-BR": "Aplicar filtro sépia a uma imagem.",
            },
            options: [(0, ImageOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
        },
        {
            description: "Apply blur filter to an image.",
            name: "blur",
            nameLocalizations: {
                "pt-BR": "desfoque",
            },
            descriptionLocalizations: {
                "pt-BR": "Aplicar filtro desfoque a uma imagem.",
            },
            options: [(0, ImageOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
        },
        {
            description: "Apply constrast filter to an image.",
            name: "contrast",
            nameLocalizations: {
                "pt-BR": "contraste",
            },
            descriptionLocalizations: {
                "pt-BR": "Aplicar filtro contraste a uma imagem.",
            },
            options: [(0, ImageOption_1.default)(true), (0, EphemeralOption_1.default)(false)],
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
        },
        {
            description: "Apply fisheye filter to an image.",
            name: "fish-eye",
            nameLocalizations: {
                "pt-BR": "olho-de-peixe",
            },
            descriptionLocalizations: {
                "pt-BR": "Aplicar filho olho de peixe a uma imagem.",
            },
            options: [
                (0, ImageOption_1.default)(true),
                {
                    description: "Fisheye level.",
                    name: "level",
                    type: oceanic_js_1.ApplicationCommandOptionTypes.INTEGER,
                    nameLocalizations: {
                        "pt-BR": "nível",
                    },
                    descriptionLocalizations: {
                        "pt-BR": "Nível do olho de peixe.",
                    },
                },
                (0, EphemeralOption_1.default)(false),
            ],
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
        },
        {
            description: "Apply distort filter to an image.",
            name: "distort",
            nameLocalizations: {
                "pt-BR": "distorcer",
            },
            descriptionLocalizations: {
                "pt-BR": "Aplicar filtro distorcer a uma imagem.",
            },
            options: [
                (0, ImageOption_1.default)(true),
                {
                    description: "Distort level.",
                    name: "level",
                    type: oceanic_js_1.ApplicationCommandOptionTypes.INTEGER,
                    nameLocalizations: {
                        "pt-BR": "nível",
                    },
                    descriptionLocalizations: {
                        "pt-BR": "Nível de distorção.",
                    },
                },
                {
                    description: "Amplitude level.",
                    name: "amplitude",
                    nameLocalizations: {
                        "pt-BR": "amplitude",
                    },
                    descriptionLocalizations: {
                        "pt-BR": "Nível de amplitude.",
                    },
                    type: oceanic_js_1.ApplicationCommandOptionTypes.INTEGER,
                },
                (0, EphemeralOption_1.default)(false)
            ],
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
        },
        {
            description: "Apply desaturate filter to an image.",
            name: "desaturate",
            nameLocalizations: {
                "pt-BR": "dessaturar",
            },
            descriptionLocalizations: {
                "pt-BR": "Aplicar filtro dessaturar a uma imagem.",
            },
            options: [
                (0, ImageOption_1.default)(true),
                {
                    description: "Desaturate level.",
                    name: "level",
                    nameLocalizations: {
                        "pt-BR": "nível",
                    },
                    descriptionLocalizations: {
                        "pt-BR": "Nível de dessaturação.",
                    },
                    type: oceanic_js_1.ApplicationCommandOptionTypes.INTEGER,
                },
                (0, EphemeralOption_1.default)(false)
            ],
            type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
        },
    ],
});
