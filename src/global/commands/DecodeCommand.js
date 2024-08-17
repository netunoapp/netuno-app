const {
  ApplicationIntegrationTypes,
  InteractionContextTypes,
  ApplicationCommandOptionTypes,
  ApplicationCommandTypes,
} = require("oceanic.js");
const TextOption = require("../options/TextOption");
const Command = require("../base/Command");
const EphemeralOption = require("../options/EphemeralOption");

module.exports = Command({
  type: ApplicationCommandTypes.CHAT_INPUT,
  name: "decode",
  nameLocalizations: {
    "pt-BR": "decódificar",
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
      name: "morse",
      description: "Decode a morse code.",
      descriptionLocalizations: {
        "pt-BR": "Decódifique um código morse.",
      },
      options: [TextOption(true), EphemeralOption(false)],
    },
    {
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
      name: "base64",
      description: "Decode a base64 code.",
      descriptionLocalizations: {
        "pt-BR": "Decódifique um código base64.",
      },
      options: [TextOption(true), EphemeralOption(false)],
    },
    {
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
      name: "binary",
      nameLocalizations: {
        "pt-BR": "binário",
      },
      description: "Decode a binary code.",
      descriptionLocalizations: {
        "pt-BR": "Decódifique um código binário.",
      },
      options: [TextOption(true), EphemeralOption(false)],
    },
  ],
});
