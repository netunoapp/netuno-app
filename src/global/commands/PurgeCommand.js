const {
  ApplicationIntegrationTypes,
  ApplicationCommandOptionTypes,
  ApplicationCommandTypes,
} = require("oceanic.js");
const Command = require("../base/Command");
const AmountOption = require("../options/AmountOption");
const UserOption = require("../options/UserOption");

module.exports = Command({
  type: ApplicationCommandTypes.CHAT_INPUT,
  name: "purge",
  nameLocalizations: {
    "pt-BR": "limpar",
  },
  description: "undefined",
  dmPermission: false,
  defaultMemberPermissions: "8589934608",
  integrationTypes: [ApplicationIntegrationTypes.GUILD_INSTALL],
  options: [
    {
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
      name: "all",
      nameLocalizations: {
        "pt-BR": "tudo",
      },
      description: "Clear all channel messages.",
      descriptionLocalizations: {
        "pt-BR": "Limpe todas as mensagens do canal.",
      },
    },
    {
      type: ApplicationCommandOptionTypes.SUB_COMMAND_GROUP,
      name: "messages",
      nameLocalizations: {
        "pt-BR": "mensagens",
      },
      description: "undefined",
      options: [
        {
          type: ApplicationCommandOptionTypes.SUB_COMMAND,
          name: "all",
          nameLocalizations: {
            "pt-BR": "tudo",
          },
          description: "Clear channel messages.",
          descriptionLocalizations: {
            "pt-BR": "Limpa mensagens do canal.",
          },
          options: [AmountOption(false)],
        },
        {
          type: ApplicationCommandOptionTypes.SUB_COMMAND,
          name: "user",
          nameLocalizations: {
            "pt-BR": "usuário",
          },
          description: "Clear channel user messages.",
          descriptionLocalizations: {
            "pt-BR": "Limpa mensagens de usuário do canal.",
          },
          options: [UserOption(true), AmountOption(false)],
        },
        {
          type: ApplicationCommandOptionTypes.SUB_COMMAND,
          name: "pinned",
          nameLocalizations: {
            "pt-BR": "fixadas",
          },
          description: "Clear channel pinned messages.",
          descriptionLocalizations: {
            "pt-BR": "Limpa mensagens fixadas do canal.",
          },
          options: [AmountOption(false)],
        },
        {
          type: ApplicationCommandOptionTypes.SUB_COMMAND,
          name: "unpinned",
          nameLocalizations: {
            "pt-BR": "não-fixadas",
          },
          description: "Clear channel unpinned messages.",
          descriptionLocalizations: {
            "pt-BR": "Limpa mensagens não fixadas do canal.",
          },
          options: [AmountOption(false)],
        },
        {
          type: ApplicationCommandOptionTypes.SUB_COMMAND,
          name: "users",
          nameLocalizations: {
            "pt-BR": "usuários",
          },
          description: "Clear channel users messages.",
          descriptionLocalizations: {
            "pt-BR": "Limpa mensagens de usuários do canal.",
          },
          options: [AmountOption(false)],
        },
        {
          type: ApplicationCommandOptionTypes.SUB_COMMAND,
          name: "apps",
          nameLocalizations: {
            "pt-BR": "aplicativos",
          },
          description: "Clear channel apps messages.",
          descriptionLocalizations: {
            "pt-BR": "Limpa mensagens de aplicativos do canal.",
          },
          options: [AmountOption(false)],
        },
      ],
    },
  ],
});
