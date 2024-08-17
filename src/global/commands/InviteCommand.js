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
  name: "invite",
  nameLocalizations: {
    "pt-BR": "convite",
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
      description: "Information about an invitation.",
      descriptionLocalizations: {
        "pt-BR": "Informações sobre um convite.",
      },
      options: [
        {
          type: ApplicationCommandOptionTypes.STRING,
          required: true,
          name: "code",
          nameLocalizations: {
            "pt-BR": "código",
          },
          description: "Invitation code.",
          descriptionLocalizations: {
            "pt-BR": "Código do convite.",
          },
        },
        EphemeralOption(false),
      ],
    },
  ],
});
