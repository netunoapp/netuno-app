const {
  ApplicationCommandTypes,
  ApplicationIntegrationTypes,
  InteractionContextTypes,
} = require("oceanic.js");
const Command = require("../base/Command");

module.exports = Command({
  type: ApplicationCommandTypes.MESSAGE,
  name: "translate",
  nameLocalizations: {
    "pt-BR": "traduzir",
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
});
