const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  parseEmoji,
} = require("discord.js");
const Command = require("../base/Command");
const emojis = require("../../data/emojis.json");
const getUser = require("../helpers/getUser");

module.exports = new Command("user banner", async ({ t, interaction }) => {
  const userOption = interaction.options.getUser("user", false) ?? interaction.user;
  const user = await getUser(userOption.id);
  const url = user.banner
    ? `https://cdn.discordapp.com/banners/${user.id}/${user.banner}.${user.banner.includes("a_") ? "gif" : "png"}?size=4096`
    : null;

  if (url === null) {
    interaction.editReply(`${emojis.no} **│** ${t["!user_banner"]}`);
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
