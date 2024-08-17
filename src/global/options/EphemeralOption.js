const { ApplicationCommandOptionTypes } = require("oceanic.js");

module.exports = function (required) {
  return {
    required,
    name: "ephemeral",
    nameLocalizations: {
      "pt-BR": "efêmero",
    },
    description: "Will the message be ephemeral?",
    descriptionLocalizations: {
      "pt-BR": "A mensagem será efêmera?",
    },
    type: ApplicationCommandOptionTypes.BOOLEAN,
  };
};
