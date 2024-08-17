const {
  InteractionContextTypes,
  ApplicationIntegrationTypes,
  ApplicationCommandTypes,
  ApplicationCommandOptionTypes,
} = require("oceanic.js");
const Command = require("../base/Command");
const UserOption = require("../options/UserOption");
const EphemeralOption = require("../options/EphemeralOption");

module.exports = Command({
  name: "app",
  description: "undefined",
  contexts: [
    InteractionContextTypes.BOT_DM,
    InteractionContextTypes.GUILD,
    InteractionContextTypes.PRIVATE_CHANNEL,
  ],
  integrationTypes: [
    ApplicationIntegrationTypes.GUILD_INSTALL,
    ApplicationIntegrationTypes.USER_INSTALL,
  ],
  type: ApplicationCommandTypes.CHAT_INPUT,
  options: [
    {
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
      name: "info",
      description: "Information about an application.",
      descriptionLocalizations: {
        "pt-BR": "Informações sobre um aplicativo",
      },
      options: [UserOption(true), EphemeralOption(false)],
    },
  ],
});
