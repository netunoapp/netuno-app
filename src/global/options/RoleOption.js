const { ApplicationCommandOptionTypes } = require("oceanic.js");

module.exports = function (required) {
  return {
    required,
    name: "role",
    nameLocalizations: {
      "pt-BR": "cargo",
    },
    description: "Choose a role.",
    descriptionLocalizations: {
      "pt-BR": "Escolha um cargo.",
    },
    type: ApplicationCommandOptionTypes.ROLE,
  };
};
