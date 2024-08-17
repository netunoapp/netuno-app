const {
  ApplicationCommandTypes,
  ApplicationCommandOptionTypes,
  InteractionContextTypes,
  ApplicationIntegrationTypes,
} = require("oceanic.js");
const Command = require("../base/Command");
const EphemeralOption = require("../options/EphemeralOption");

module.exports = Command({
  type: ApplicationCommandTypes.CHAT_INPUT,
  name: "calc",
  description: "Solve mathematical calculations.",
  descriptionLocalizations: {
    "pt-BR": "Resolver cálculos matemáticos.",
  },
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
      type: ApplicationCommandOptionTypes.STRING,
      required: true,
      name: "expression",
      nameLocalizations: {
        "pt-BR": "expresão",
      },
      description: "Math expression.",
      descriptionLocalizations: {
        "pt-BR": "Expresão matemática.",
      },
    },
    EphemeralOption(false),
  ],
});
