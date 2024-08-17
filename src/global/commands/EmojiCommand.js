const {
  ApplicationCommandTypes,
  ApplicationIntegrationTypes,
  InteractionContextTypes,
  ApplicationCommandOptionTypes,
} = require("oceanic.js");
const Command = require("../base/Command");
const EphemeralOption = require("../options/EphemeralOption");

module.exports = Command({
  type: ApplicationCommandTypes.CHAT_INPUT,
  name: "emoji",
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
      name: "info",
      description: "Emoji information.",
      descriptionLocalizations: {
        "pt-BR": "Informações sobre o emoji.",
      },
      options: [
        {
          type: ApplicationCommandOptionTypes.STRING,
          required: true,
          name: "emoji",
          description: "The Emoji.",
          descriptionLocalizations: {
            "pt-BR": "O Emoji.",
          },
        },
        EphemeralOption(false),
      ],
    },
    {
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
      name: "view",
      nameLocalizations: {
        "pt-BR": "ver",
      },
      description: "See emoji.",
      descriptionLocalizations: {
        "pt-BR": "Veja o emoji.",
      },
      options: [
        {
          type: ApplicationCommandOptionTypes.STRING,
          required: true,
          name: "emoji",
          description: "The Emoji.",
          descriptionLocalizations: {
            "pt-BR": "O Emoji.",
          },
        },
        EphemeralOption(false),
      ],
    },
  ],
});
