const Command = require("../../../base/Command");
const emojis = require("../../../../data/emojis.json");
const { EmbedBuilder } = require("discord.js");

module.exports = new Command("server role icon", async ({ t, interaction }) => {
  if (!interaction.isChatInputCommand()) return;

  const role = interaction.options.getRole("role", true);
  const url = role.iconURL({
    size: 4096,
    extension: role.icon && role.icon.includes("a_") ? "gif" : "png",
  });

  if (icon === null) {
    interaction.editReply(`${emojis.no} **│** ${t["!role_icon"]}`);
  } else {
    const downloadEmoji = await parseEmoji(emojis.download);

    interaction.editReply({
      embeds: [
        new EmbedBuilder()
          .setColor("Blurple")
          .setImage(url)
          .setTitle(role.name),
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
