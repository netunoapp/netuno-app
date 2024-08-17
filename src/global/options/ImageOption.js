const { ApplicationCommandOptionTypes } = require("oceanic.js");

module.exports = function (required) {
  return {
    required,
    name: "image-url",
    nameLocalizations: {
      "pt-BR": "url-da-imagem",
    },
    description: "Image url.",
    descriptionLocalizations: {
      "pt-BR": "Url da imagem.",
    },
    type: ApplicationCommandOptionTypes.STRING,
  };
};
