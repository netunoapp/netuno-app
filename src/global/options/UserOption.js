const { ApplicationCommandOptionTypes } = require("oceanic.js");

module.exports = function (required) {
  return {
    required,
    name: "user",
    nameLocalizations: {
      "pt-BR": "usuário",
    },
    description: "A Discord user.",
    descriptionLocalizations: {
      "pt-BR": "Um Usuário do discord.",
    },
    type: ApplicationCommandOptionTypes.USER,
  };
};
