const {
  InteractionContextTypes,
  ApplicationCommandTypes,
  ApplicationIntegrationTypes,
  ApplicationCommandOptionTypes,
} = require("oceanic.js");
const TextOption = require("../options/TextOption");
const Command = require("../base/Command");
const EphemeralOption = require("../options/EphemeralOption");

module.exports = (0, Command_1.default)({
  type: ApplicationCommandTypes.CHAT_INPUT,
  name: "text",
  nameLocalizations: {
    "pt-BR": "texto",
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
      name: "anagram",
      nameLocalizations: {
        "pt-BR": "anagrama",
      },
      description: "Calculates the number of anagrams in the word.",
      descriptionLocalizations: {
        "pt-BR": "Calcula o número de anagramas na palavra.",
      },
      options: [TextOption(true), EphemeralOption(false)],
    },
    {
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
      name: "lowercase",
      nameLocalizations: {
        "pt-BR": "minúsculo",
      },
      description: "Make letters lowercase..",
      descriptionLocalizations: {
        "pt-BR": "Deixe as letras minúsculas.",
      },
      options: [TextOption(true), EphemeralOption(false)],
    },
    {
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
      name: "uppercase",
      nameLocalizations: {
        "pt-BR": "maiúsculo",
      },
      description: "Make letters uppercase.",
      descriptionLocalizations: {
        "pt-BR": "Deixe as letras maiúsculas.",
      },
      options: [TextOption(true), EphemeralOption(false)],
    },
    {
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
      name: "reverse",
      nameLocalizations: {
        "pt-BR": "inverso",
      },
      description: "Make the text reversed.",
      descriptionLocalizations: {
        "pt-BR": "Deixe o texto invertido.",
      },
      options: [TextOption(true), EphemeralOption(false)],
    },
    {
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
      name: "vaporwave",
      nameLocalizations: {
        "pt-BR": "vaporonda",
      },
      description: "Change the text font to vaporwave.",
      descriptionLocalizations: {
        "pt-BR": "Altere a fonte do texto para vaporonda.",
      },
      options: [TextOption(true), EphemeralOption(false)],
    },
    {
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
      name: "quality",
      nameLocalizations: {
        "pt-BR": "qualidade",
      },
      description: "Change the text font to quality.",
      descriptionLocalizations: {
        "pt-BR": "Altere a fonte do texto para qualidade.",
      },
      options: [TextOption(true), EphemeralOption(false)],
    },
    {
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
      name: "translate",
      nameLocalizations: {
        "pt-BR": "traduzir",
      },
      description: "Translation tool.",
      descriptionLocalizations: {
        "pt-BR": "Ferramenta de tradução.",
      },
      options: [
        {
          required: true,
          type: ApplicationCommandOptionTypes.STRING,
          name: "to",
          autocomplete: true,
          nameLocalizations: {
            "pt-BR": "para",
          },
          description: "Translate to?",
          descriptionLocalizations: {
            "pt-BR": "Traduzir para?",
          },
        },
        TextOption(true),
        EphemeralOption(false),
      ],
    },
  ],
});
