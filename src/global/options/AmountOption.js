const { ApplicationCommandOptionTypes } = require("oceanic.js");

module.exports = function (required) {
  return {
    required,
    minValue: 2,
    maxValue: 2000,
    name: "amount",
    nameLocalizations: {
      "pt-BR": "quantidade",
    },
    description: "Amount of messages you want to delete.",
    descriptionLocalizations: {
      "pt-BR": "Quantidade de mensagens que você deseja excluir.",
    },
    type: ApplicationCommandOptionTypes.INTEGER,
  };
};
