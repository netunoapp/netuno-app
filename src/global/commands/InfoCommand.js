const {
  ApplicationCommandTypes,
  ApplicationIntegrationTypes,
  InteractionContextTypes,
} = require("oceanic.js");
const Command = require("../base/Command");
const EphemeralOption = require("../options/EphemeralOption");

module.exports = Command({
  type: ApplicationCommandTypes.CHAT_INPUT,
  name: "info",
  description: "Information about me.",
  descriptionLocalizations: {
    "pt-BR": "Informações sobre mim.",
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
  options: [EphemeralOption(false)],
});
