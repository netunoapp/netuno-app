const {
  ApplicationIntegrationTypes,
  InteractionContextTypes,
  ApplicationCommandTypes,
  ApplicationCommandOptionTypes,
} = require("oceanic.js");
const Command = require("../base/Command");
const ImageOption = require("../options/ImageOption");
const EphemeralOption = require("../options/EphemeralOption");

module.exports = Command({
  name: "filter",
  nameLocalizations: {
    "pt-BR": "filtro",
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
  type: ApplicationCommandTypes.CHAT_INPUT,
  options: [
    {
      description: "Apply grayscale filter to an image.",
      name: "greyscale",
      nameLocalizations: {
        "pt-BR": "escala-de-cinza",
      },
      descriptionLocalizations: {
        "pt-BR": "Aplicar filtro escala de cinza a uma imagem.",
      },
      options: [ImageOption(true), EphemeralOption(false)],
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
    },
    {
      description: "Apply invert filter to an image.",
      name: "invert",
      nameLocalizations: {
        "pt-BR": "invertido",
      },
      descriptionLocalizations: {
        "pt-BR": "Aplicar filtro invertido a uma imagem.",
      },
      options: [ImageOption(true), EphemeralOption(false)],
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
    },
    {
      description: "Apply silhouette filtro to an image.",
      name: "silhouette",
      nameLocalizations: {
        "pt-BR": "silhueta",
      },
      descriptionLocalizations: {
        "pt-BR": "Aplicar filtro silhueta a uma imagem.",
      },
      options: [ImageOption(true), EphemeralOption(false)],
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
    },
    {
      description: "Apply sepia filter to an image.",
      name: "sepia",
      nameLocalizations: {
        "pt-BR": "sépia",
      },
      descriptionLocalizations: {
        "pt-BR": "Aplicar filtro sépia a uma imagem.",
      },
      options: [ImageOption(true), EphemeralOption(false)],
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
    },
    {
      description: "Apply blur filter to an image.",
      name: "blur",
      nameLocalizations: {
        "pt-BR": "desfoque",
      },
      descriptionLocalizations: {
        "pt-BR": "Aplicar filtro desfoque a uma imagem.",
      },
      options: [ImageOption(true), EphemeralOption(false)],
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
    },
    {
      description: "Apply constrast filter to an image.",
      name: "contrast",
      nameLocalizations: {
        "pt-BR": "contraste",
      },
      descriptionLocalizations: {
        "pt-BR": "Aplicar filtro contraste a uma imagem.",
      },
      options: [ImageOption(true), EphemeralOption(false)],
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
    },
    {
      description: "Apply fisheye filter to an image.",
      name: "fish-eye",
      nameLocalizations: {
        "pt-BR": "olho-de-peixe",
      },
      descriptionLocalizations: {
        "pt-BR": "Aplicar filho olho de peixe a uma imagem.",
      },
      options: [
        ImageOption(true),
        {
          description: "Fisheye level.",
          name: "level",
          type: ApplicationCommandOptionTypes.INTEGER,
          nameLocalizations: {
            "pt-BR": "nível",
          },
          descriptionLocalizations: {
            "pt-BR": "Nível do olho de peixe.",
          },
        },
        EphemeralOption(false),
      ],
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
    },
    {
      description: "Apply distort filter to an image.",
      name: "distort",
      nameLocalizations: {
        "pt-BR": "distorcer",
      },
      descriptionLocalizations: {
        "pt-BR": "Aplicar filtro distorcer a uma imagem.",
      },
      options: [
        ImageOption(true),
        {
          description: "Distort level.",
          name: "level",
          type: ApplicationCommandOptionTypes.INTEGER,
          nameLocalizations: {
            "pt-BR": "nível",
          },
          descriptionLocalizations: {
            "pt-BR": "Nível de distorção.",
          },
        },
        {
          description: "Amplitude level.",
          name: "amplitude",
          nameLocalizations: {
            "pt-BR": "amplitude",
          },
          descriptionLocalizations: {
            "pt-BR": "Nível de amplitude.",
          },
          type: ApplicationCommandOptionTypes.INTEGER,
        },
        EphemeralOption(false),
      ],
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
    },
    {
      description: "Apply desaturate filter to an image.",
      name: "desaturate",
      nameLocalizations: {
        "pt-BR": "dessaturar",
      },
      descriptionLocalizations: {
        "pt-BR": "Aplicar filtro dessaturar a uma imagem.",
      },
      options: [
        ImageOption(true),
        {
          description: "Desaturate level.",
          name: "level",
          nameLocalizations: {
            "pt-BR": "nível",
          },
          descriptionLocalizations: {
            "pt-BR": "Nível de dessaturação.",
          },
          type: ApplicationCommandOptionTypes.INTEGER,
        },
        EphemeralOption(false),
      ],
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
    },
  ],
});
