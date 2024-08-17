const {
  ApplicationIntegrationTypes,
  ApplicationCommandTypes,
} = require("oceanic.js");
const Command = require("../base/Command");
const EphemeralOption = require("../options/EphemeralOption");

module.exports = Command({
  type: ApplicationCommandTypes.CHAT_INPUT,
  name: "ping",
  description: "See a latency.",
  descriptionLocalizations: {
    "pt-BR": "Veja minha latência.",
  },
  integrationTypes: [ApplicationIntegrationTypes.GUILD_INSTALL],
  options: [EphemeralOption(false)],
});
