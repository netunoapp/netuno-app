const { ApplicationCommandTypes, ApplicationIntegrationTypes, InteractionContextTypes, ApplicationCommandOptionTypes } = require("oceanic.js");
const TextOption = require("../options/TextOption");
const Command = require("../base/Command");
const EphemeralOption = require("../options/EphemeralOption");

module.exports = Command({
    type: ApplicationCommandTypes.CHAT_INPUT,
    name: "encode",
    nameLocalizations: {
        "pt-BR": "códificar",
    },
    description: "undefined",
    integrationTypes: [
        ApplicationIntegrationTypes.GUILD_INSTALL,
        ApplicationIntegrationTypes.USER_INSTALL,
    ],
    contexts: [
        InteractionContextTypes.BOT_DM,
        InteractionContextTypes.GUILD,
        InteractionContextTypes.PRIVATE_CHANNEL,
    ],
    options: [
        {
            type: ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "morse",
            description: "Encode to morse code.",
            descriptionLocalizations: {
                "pt-BR": "Códifique para código morse.",
            },
            options: [TextOption(true), EphemeralOption(false)],
        },
        {
            type: ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "base64",
            description: "Encode to base64 code.",
            descriptionLocalizations: {
                "pt-BR": "Códifique para código base64.",
            },
            options: [TextOption(true), EphemeralOption(false)],
        },
        {
            type: ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "binary",
            nameLocalizations: {
                "pt-BR": "binário",
            },
            description: "Encode to binary code.",
            descriptionLocalizations: {
                "pt-BR": "Códifique para código binário.",
            },
            options: [TextOption(true), EphemeralOption(false)],
        },
    ],
});
