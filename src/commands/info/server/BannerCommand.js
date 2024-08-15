const Command = require("../../../base/Command");
const emojis = require("../../../../data/emojis.json");
const {
  parseEmoji,
  EmbedBuilder,
  ButtonStyle,
  ActionRowBuilder,
  ButtonBuilder,
} = require("discord.js");

module.exports = new Command("server banner", async ({ t, interaction }) => {
  if (!interaction.isChatInputCommand()) return;

  const server = interaction.guild;

  if (!server) return;

  const url = server.bannerURL({
    size: 4096,
    extension: server.banner && server.banner.includes("a_") ? "gif" : "png",
  });

  if (url === null) {
    interaction.editReply(`${emojis.no} **│** ${t["!server_banner"]}`);
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
