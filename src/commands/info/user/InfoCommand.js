const Command = require("../../../base/Command");
const emojis = require("../../../../data/emojis.json");
const { Constants } = require("oceanic.js");
const getEmoji = require("../../../helpers/getEmoji");

module.exports = new Command(
  "user info",
  async ({ t, app, author, interaction }) => {
    const userOption =
      interaction.data.options.getUser("user", false) ?? author;
    const user = await app.rest.users.get(userOption.id);
    const badges = [user.bot ? emojis.app : emojis.user];
    const avatar = user.avatarURL(
      user.avatar && user.avatar.includes("a_") ? "gif" : "png",
      4096
    );
    const banner = user.bannerURL(
      user.banner && user.banner.includes("a_") ? "gif" : "png",
      4096
    );

    if (user.publicFlags) {
      for (const [key, val] of Object.entries(Constants.UserFlags)) {
        if (user.publicFlags & val) {
          badges.push(
            emojis.badges[`${key.toLowerCase().split("_").join(" ")}`]
          );
        }
      }
    }

    const embed = {
      color: 5793266,
      title: `${user.globalName ? user.globalName : user.tag}`,
      description: badges.filter((v, i, s) => s.indexOf(v) === i).join(""),
      fields: [
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
          value: `\`\`${user.mention}\`\``,
        },
        {
          name: `${emojis.calendar} ${t.createdat}`,
          value: `<t:${parseInt(
            `${user.createdAt.getTime() / 1000}`
          )}:F> (<t:${parseInt(`${user.createdAt.getTime() / 1000}`)}:R>)`,
        },
      ],
    };

    if (banner) embed.image = { url: banner };
    if (avatar) embed.thumbnail = { url: avatar };

    const userEmoji = await getEmoji(emojis.user);

    interaction.createFollowup({
      embeds: [embed],
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              style: 5,
              emoji: {
                id: userEmoji.id,
                name: userEmoji.name,
              },
              label: t.profile,
              url: `https://discord.com/users/${user.id}`,
            },
          ],
        },
      ],
    });
  }
);
