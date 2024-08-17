const { ApplicationCommandOptionTypes } = require("oceanic.js");

module.exports = function (required) {
  return {
    required,
    name: "channel",
    nameLocalizations: {
      "pt-BR": "canal",
    },
    description: "Choose a channel.",
    descriptionLocalizations: {
      "pt-BR": "Escolha um canal.",
    },
    type: ApplicationCommandOptionTypes.CHANNEL,
  };
};
