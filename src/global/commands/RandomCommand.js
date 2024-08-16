"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const oceanic_js_1 = require("oceanic.js");
const Command_1 = __importDefault(require("../base/Command"));
const EphemeralOption_1 = __importDefault(require("../options/EphemeralOption"));
function createCommand() {
    const options = [];
    for (let i = 0; i < 23; i++) {
        options.push({
            name: `choice${i + 1}`,
            nameLocalizations: {
                "pt-BR": `escolha${i + 1}`,
            },
            required: i >= 2 ? false : true,
            description: "Choose from the list of choices.",
            descriptionLocalizations: {
                "pt-BR": "Escolha na lista de escolhas.",
            },
            type: oceanic_js_1.ApplicationCommandOptionTypes.STRING,
        });
    }
    options.push((0, EphemeralOption_1.default)(false));
    return (0, Command_1.default)({
        name: "random",
        nameLocalizations: {
            "pt-BR": "aleatório",
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
                type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND_GROUP,
                name: "animal",
                description: "undefined",
                options: [
                    {
                        type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                        name: "cat",
                        nameLocalizations: {
                            "pt-BR": "gato",
                        },
                        description: "See a cat.",
                        descriptionLocalizations: {
                            "pt-BR": "Veja um gato.",
                        },
                        options: [(0, EphemeralOption_1.default)(false)]
                    },
                    {
                        type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                        name: "dog",
                        nameLocalizations: {
                            "pt-BR": "cachorro",
                        },
                        description: "See a dog.",
                        descriptionLocalizations: {
                            "pt-BR": "Veja um cachorro.",
                        },
                        options: [(0, EphemeralOption_1.default)(false)]
                    },
                ],
            },
            {
                options: options,
                type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                name: "choice",
                nameLocalizations: {
                    "pt-BR": "escolha",
                },
                description: "Generates a random choice.",
                descriptionLocalizations: {
                    "pt-BR": "Gera uma escolha aleatória.",
                },
            },
        ],
    });
}
const command = createCommand();
exports.default = command;
