const { ApplicationCommandOptionTypes } = require("oceanic.js");

module.exports = function (required) {
  return {
    required,
    name: "text",
    nameLocalizations: {
      "pt-BR": "texto",
    },
    description: "The text.",
    descriptionLocalizations: {
      "pt-BR": "O Texto.",
    },
    type: ApplicationCommandOptionTypes.STRING,
  };
};
