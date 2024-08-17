const {
  ApplicationIntegrationTypes,
  InteractionContextTypes,
  ApplicationCommandTypes,
} = require("oceanic.js");
const Command = require("../base/Command");

module.exports = new Command({
  name: "daily",
  description: "Claim your daily reward.",
  descriptionLocalizations: {
    "pt-BR": "Resgate sua recompensa diária.",
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
  type: ApplicationCommandTypes.CHAT_INPUT,
});
