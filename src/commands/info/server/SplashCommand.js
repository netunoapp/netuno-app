const Command = require("../../../base/Command");
const emojis = require("../../../../data/emojis.json");
const {
  parseEmoji,
  EmbedBuilder,
  ButtonStyle,
  ActionRowBuilder,
  ButtonBuilder,
} = require("discord.js");

module.exports = new Command("server splash", async ({ t, interaction }) => {
  if (!interaction.isChatInputCommand()) return;

  const server = interaction.guild;

  if (!server) return;

  const url = server.splashURL({
    size: 4096,
    extension: server.splash && server.splash.includes("a_") ? "gif" : "png",
  });

  if (url === null) {
    interaction.editReply(`${emojis.no} **│** ${t["!server_splash"]}`);
  } else {
    const downloadEmoji = await parseEmoji(emojis.download);

    interaction.editReply({
      embeds: [
        new EmbedBuilder()
          .setColor("Blurple")
          .setImage(url)
          .setTitle(server.name),
      ],
      components: [
        new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setURL(url)
            .setLabel(t.download)
            .setEmoji({
              id: downloadEmoji.id,
              name: downloadEmoji.name,
            })
            .setStyle(ButtonStyle.Link)
        ),
      ],
    });
  }
});
