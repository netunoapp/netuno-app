const {
  ApplicationCommandOptionTypes,
  ApplicationIntegrationTypes,
  InteractionContextTypes,
  ApplicationCommandTypes,
} = require("oceanic.js");
const Command = require("../base/Command");
const EphemeralOption = require("../options/EphemeralOption");

function createCommand() {
  const options = [];

  for (let i = 0; i < 23; i++) {
    options.push({
      name: `choice${i + 1}`,
      nameLocalizations: {
        "pt-BR": `escolha${i + 1}`,
      },
      required: i >= 2 ? false : true,
      description: "Choose from the list of choices.",
      descriptionLocalizations: {
        "pt-BR": "Escolha na lista de escolhas.",
      },
      type: ApplicationCommandOptionTypes.STRING,
    });
  }

  options.push(EphemeralOption(false));

  return Command({
    name: "random",
    nameLocalizations: {
      "pt-BR": "aleatório",
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
        options: options,
        type: ApplicationCommandOptionTypes.SUB_COMMAND,
        name: "choice",
        nameLocalizations: {
          "pt-BR": "escolha",
        },
        description: "Generates a random choice.",
        descriptionLocalizations: {
          "pt-BR": "Gera uma escolha aleatória.",
        },
      },
    ],
  });
}
const command = createCommand();

module.exports = command;
