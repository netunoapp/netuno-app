const {
  ApplicationCommandTypes,
  InteractionContextTypes,
  ApplicationIntegrationTypes,
  ApplicationCommandOptionTypes,
} = require("oceanic.js");
const Command = require("../base/Command");
const EphemeralOption = require("../options/EphemeralOption");

exports.default = Command({
  type: ApplicationCommandTypes.CHAT_INPUT,
  name: "color",
  nameLocalizations: {
    "pt-BR": "cor",
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
      name: "info",
      description: "Information about a color.",
      descriptionLocalizations: {
        "pt-BR": "Informações sobre uma cor.",
      },
      options: [
        {
          type: ApplicationCommandOptionTypes.STRING,
          required: true,
          name: "color",
          nameLocalizations: {
            "pt-BR": "cor",
          },
          description: "Hex color.",
          descriptionLocalizations: {
            "pt-BR": "Cor hexadecimal.",
          },
        },
        EphemeralOption(false),
      ],
    },
  ],
});
