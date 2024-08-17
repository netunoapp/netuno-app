const { ApplicationIntegrationTypes, InteractionContextTypes, ApplicationCommandOptionTypes } = require("oceanic.js");
const Command = require("../base/Command");
const UserOption = require("../options/UserOption");
const EphemeralOption = require("../options/EphemeralOption");

module.exports = Command({
    name: "user",
    nameLocalizations: {
        "pt-BR": "usuário",
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
    type: ApplicationCommandTypes.CHAT_INPUT,
    options: [
        {
            type: ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "info",
            description: "Information about the user.",
            descriptionLocalizations: {
                "pt-BR": "Informações sobre o usuário.",
            },
            options: [UserOption(false), EphemeralOption(false)],
        },
        {
            type: ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "banner",
            nameLocalizations: {
                "pt-BR": "estandarte"
            },
            description: "See user banner.",
            descriptionLocalizations: {
                "pt-BR": "Veja o estandarte do usuário.",
            },
            options: [UserOption(false), EphemeralOption(false)],
        },
        {
            type: ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "avatar",
            description: "See user avatar.",
            descriptionLocalizations: {
                "pt-BR": "Veja o avatar do usuário.",
            },
            options: [UserOption(false), EphemeralOption(false)],
        },
    ],
});
