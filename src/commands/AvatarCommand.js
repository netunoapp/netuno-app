const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  parseEmoji,
} = require("discord.js");
const Command = require("../base/Command");
const emojis = require("../../data/emojis.json");

module.exports = new Command("user avatar", async ({ t, interaction }) => {
  const user = interaction.options.getUser("user", false) ?? interaction.user;
  const url = user.displayAvatarURL({
    size: 4096,
    extension: user.avatar && user.avatar.includes("a_") ? "gif" : "png",
  });

  if (url === null) {
    interaction.editReply(`${emojis.no} **│** ${t["!user_avatar"]}`);
  } else {
    const downloadEmoji = await parseEmoji(emojis.download);

    interaction.editReply({
      embeds: [
        new EmbedBuilder()
          .setColor("Blurple")
          .setImage(url)
          .setTitle(user.globalName ?? user.username),
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
