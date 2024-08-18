const {
  ApplicationCommandTypes,
  ApplicationIntegrationTypes,
  InteractionContextTypes,
  ApplicationCommandOptionTypes,
} = require("oceanic.js");
const Command = require("../base/Command");
const ImageOption = require("../options/ImageOption");
const EphemeralOption = require("../options/EphemeralOption");

module.exports = Command({
  name: "border",
  nameLocalizations: {
    "pt-BR": "borda",
  },
  description: "undefined",
  type: ApplicationCommandTypes.CHAT_INPUT,
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
      name: "bisexual",
      nameLocalizations: {
        "pt-BR": "bissexual",
      },
      description: "Add bisexual border to image.",
      descriptionLocalizations: {
        "pt-BR": "Adicione borda bissexual à imagem.",
      },
      options: [ImageOption(true), EphemeralOption(false)],
    },
    {
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
      name: "lesbian",
      nameLocalizations: {
        "pt-BR": "lésbica",
      },
      description: "Add lesbian border to image.",
      descriptionLocalizations: {
        "pt-BR": "Adicione borda lésbica à imagem.",
      },
      options: [ImageOption(true), EphemeralOption(false)],
    },
    {
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
      name: "non-binary",
      nameLocalizations: {
        "pt-BR": "não-binário",
      },
      description: "Add non binary border to image.",
      descriptionLocalizations: {
        "pt-BR": "Adicione borda não binário à imagem.",
      },
      options: [ImageOption(true), EphemeralOption(false)],
    },
    {
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
      name: "transgender",
      nameLocalizations: {
        "pt-BR": "transgênero",
      },
      description: "Add transgender border to image.",
      descriptionLocalizations: {
        "pt-BR": "Adicione borda transgênero à imagem.",
      },
      options: [ImageOption(true), EphemeralOption(false)],
    },
    {
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
      name: "round",
      nameLocalizations: {
        "pt-BR": "rendonda",
      },
      description: "Add round border to image.",
      descriptionLocalizations: {
        "pt-BR": "Adicione borda redonda à imagem.",
      },
      options: [ImageOption(true), EphemeralOption(false)],
    },
    {
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
      name: "gay",
      description: "Add gay border to image.",
      descriptionLocalizations: {
        "pt-BR": "Adicione borda gay à imagem.",
      },
      options: [ImageOption(true), EphemeralOption(false)],
    },
    {
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
      name: "agender",
      nameLocalizations: {
        "pt-BR": "agênero",
      },
      description: "Add agender border to image.",
      descriptionLocalizations: {
        "pt-BR": "Adicione borda agênero à imagem.",
      },
      options: [ImageOption(true), EphemeralOption(false)],
    },
    {
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
      name: "genderfluid",
      nameLocalizations: {
        "pt-BR": "gênero-fluído",
      },
      description: "Add genderfluid border to image.",
      descriptionLocalizations: {
        "pt-BR": "Adicione borda gênero fluído à imagem.",
      },
      options: [ImageOption(true), EphemeralOption(false)],
    },
    {
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
      name: "pansexual",
      description: "Add pansexual border to image.",
      descriptionLocalizations: {
        "pt-BR": "Adicione borda pansexual à imagem.",
      },
      options: [ImageOption(true), EphemeralOption(false)],
    },
    {
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
      name: "lgbt",
      description: "Add lgbt border to image.",
      descriptionLocalizations: {
        "pt-BR": "Adicione borda lgbt à imagem.",
      },
      options: [ImageOption(true), EphemeralOption(false)],
    },
  ],
});
