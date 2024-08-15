const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  parseEmoji,
} = require("discord.js");
const Command = require("../../../base/Command");
const emojis = require("../../../../data/emojis.json");
const getUser = require("../../../helpers/getUser");

module.exports = new Command("user info", async ({ t, interaction }) => {
  if (!interaction.isChatInputCommand()) return;

  const user = interaction.options.getUser("user", false) ?? interaction.user;
  const avatar = user.displayAvatarURL({
    size: 4096,
    extension: user.avatar && user.avatar.includes("a_") ? "gif" : "png",
  });
  const user_ = await getUser(user.id);
  const banner = user_.banner
    ? `https://cdn.discordapp.com/banners/${user_.id}/${user_.banner}.${
        user_.banner.includes("a_") ? "gif" : "png"
      }?size=4096`
    : null;

  const userBadges = user.flags?.toArray() ?? "";
  let badgesArray = "> ";
  badgesArray += `${user.bot ? emojis.app : emojis.user} `;
  for (let i = 0; i < userBadges.length; i++) {
    badgesArray += emojis.badges[userBadges[i]] + " ";
  }

  const embed = new EmbedBuilder()
    .setColor("Blurple")
    .setDescription(badgesArray)
    .setTitle(`${user.globalName ?? user.username}`)
    .addFields(
      {
        inline: true,
        name: `${emojis.tag} ${t.tag}`,
        value: `\`\`${user.tag}\`\``,
      },
      {
        inline: true,
        name: `${emojis.id} ${t.id}`,
        value: `\`\`${user.id}\`\``,
      },
      {
        inline: true,
        name: `${emojis.mention} ${t.mention}`,
        value: `\`\`${user}\`\``,
      },
      {
        name: `${emojis.calendar} ${t.createdat}`,
        value: `<t:${parseInt(
          `${user.createdAt.getTime() / 1000}`
        )}:F> (<t:${parseInt(`${user.createdAt.getTime() / 1000}`)}:R>)`,
      }
    );

  if (banner) embed.setImage(banner);
  if (avatar) embed.setThumbnail(avatar);

  const userEmoji = await parseEmoji(emojis.user);

  interaction.editReply({
    embeds: [embed],
    components: [
      new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setLabel(t.profile)
          .setEmoji({
            id: userEmoji.id,
            name: userEmoji.name,
          })
          .setStyle(ButtonStyle.Link)
          .setURL(`https://discord.com/users/${user.id}`)
      ),
    ],
  });
});
