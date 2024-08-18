const { ApplicationIntegrationTypes, ApplicationCommandTypes, ApplicationCommandOptionTypes } = require("oceanic.js");
const Command = require("../base/Command");
const MemberOption = require("../options/MemberOption");
const ChannelOption = require("../options/ChannelOption");
const RoleOption = require("../options/RoleOption");
const EphemeralOption = require("../options/EphemeralOption");

module.exports = Command({
    type: ApplicationCommandTypes.CHAT_INPUT,
    name: "server",
    nameLocalizations: {
        "pt-BR": "servidor",
    },
    description: "undefined",
    dmPermission: false,
    integrationTypes: [ApplicationIntegrationTypes.GUILD_INSTALL],
    options: [
        {
            type: ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "info",
            description: "Server information.",
            descriptionLocalizations: {
                "pt-BR": "Informações sobre o servidor.",
            },
            options: [EphemeralOption(false)]
        },
        {
            type: ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "icon",
            nameLocalizations: {
                "pt-BR": "ícone",
            },
            description: "See the server icon.",
            descriptionLocalizations: {
                "pt-BR": "Veja o ícone do servidor.",
            },
            options: [EphemeralOption(false)]
        },
        {
            type: ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "banner",
            nameLocalizations: {
                "pt-BR": "estandarte",
            },
            description: "See the server banner.",
            descriptionLocalizations: {
                "pt-BR": "Veja o estandarte do servidor.",
            },
            options: [EphemeralOption(false)]
        },
        {
            type: ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "splash",
            nameLocalizations: {
                "pt-BR": "estandarte-de-convite",
            },
            description: "See the server splash.",
            descriptionLocalizations: {
                "pt-BR": "Veja o estandarte de convite do servidor.",
            },
            options: [EphemeralOption(false)]
        },
        {
            type: ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "discovery",
            nameLocalizations: {
                "pt-BR": "estandarte-de-descoberta",
            },
            description: "See the server discovery splash.",
            descriptionLocalizations: {
                "pt-BR": "Veja o estandarte de descoberta do servidor.",
            },
            options: [EphemeralOption(false)]
        },
        {
            type: ApplicationCommandOptionTypes.SUB_COMMAND,
            name: "vanity",
            nameLocalizations: {
                "pt-BR": "url-customizada",
            },
            description: "See the server vinary url.",
            descriptionLocalizations: {
                "pt-BR": "Veja a url customizada do servidor.",
            },
            options: [EphemeralOption(false)]
        },
        {
            type: ApplicationCommandOptionTypes.SUB_COMMAND_GROUP,
            name: "member",
            nameLocalizations: {
                "pt-BR": "membro",
            },
            description: "undefined",
            options: [
                {
                    type: ApplicationCommandOptionTypes.SUB_COMMAND,
                    name: "info",
                    description: "Member Information.",
                    descriptionLocalizations: {
                        "pt-BR": "Informações sobre o membro.",
                    },
                    options: [MemberOption(false), EphemeralOption(false)],
                },
                {
                    type: ApplicationCommandOptionTypes.SUB_COMMAND,
                    name: "avatar",
                    description: "See member avatar.",
                    descriptionLocalizations: {
                        "pt-BR": "Veja o avatar do membro.",
                    },
                    options: [MemberOption(false), EphemeralOption(false)],
                },
                {
                    type: ApplicationCommandOptionTypes.SUB_COMMAND,
                    name: "banner",
                    nameLocalizations: {
                        "pt-BR": "estandarte",
                    },
                    description: "See member banner.",
                    descriptionLocalizations: {
                        "pt-BR": "Veja o estandarte do membro.",
                    },
                    options: [MemberOption(false), EphemeralOption(false)],
                },
            ],
        },
        {
            type: ApplicationCommandOptionTypes.SUB_COMMAND_GROUP,
            name: "channel",
            nameLocalizations: {
                "pt-BR": "canal"
            },
            description: "undefined",
            options: [{
                    type: ApplicationCommandOptionTypes.SUB_COMMAND,
                    name: "info",
                    description: "Channel Information.",
                    descriptionLocalizations: {
                        "pt-BR": "Informações sobre o canal."
                    },
                    options: [ChannelOption(false), EphemeralOption(false)]
                }]
        },
        {
            type: ApplicationCommandOptionTypes.SUB_COMMAND_GROUP,
            name: "role",
            nameLocalizations: {
                "pt-BR": "cargo"
            },
            description: "undefined",
            options: [{
                    type: ApplicationCommandOptionTypes.SUB_COMMAND,
                    name: "info",
                    description: "Role Information.",
                    descriptionLocalizations: {
                        "pt-BR": "Informações sobre um cargo."
                    },
                    options: [RoleOption(true), EphemeralOption(false)]
                }, {
                    type: ApplicationCommandOptionTypes.SUB_COMMAND,
                    name: "icon",
                    nameLocalizations: {
                        "pt-BR": "ícone"
                    },
                    description: "See role icon.",
                    descriptionLocalizations: {
                        "pt-BR": "Veja o ícone do cargo."
                    },
                    options: [RoleOption(true), EphemeralOption(false)]
                }]
        }
    ],
});
