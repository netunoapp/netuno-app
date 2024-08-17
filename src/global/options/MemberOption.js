const { ApplicationCommandOptionTypes } = require("oceanic.js");

module.exports = function (required) {
  return {
    required,
    name: "member",
    nameLocalizations: {
      "pt-BR": "membro",
    },
    description: "Choose a member.",
    descriptionLocalizations: {
      "pt-BR": "Escolha um membro.",
    },
    type: ApplicationCommandOptionTypes.USER,
  };
};
