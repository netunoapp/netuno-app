const emojis = require("../../../../data/emojis.json");
const Command = require("../../../base/Command");
const getEmoji = require("../../../helpers/getEmoji");

module.exports = new Command(
  "user banner",
  async ({ t, app, author, interaction }) => {
    const userOption =
      interaction.data.options.getUser("user", false) ?? author;
    const user = await app.rest.users.get(userOption.id);
    const url = user.bannerURL(
      user.banner && user.banner.includes("a_") ? "gif" : "png",
      4096
    );

    if (!url) {
      interaction.createFollowup({
        content: `${emojis.no} │ ${t["!user_banner"]}`,
      });
    } else {
      const downloadEmoji = await getEmoji(emojis.download);

      interaction.createFollowup({
        embeds: [
          {
            color: 5793266,
            image: { url },
            title: user.globalName ?? user.tag,
          },
        ],
        components: [
          {
            type: 1,
            components: [
              {
                url,
                type: 2,
                style: 5,
                emoji: {
                  id: downloadEmoji.id,
                  name: downloadEmoji.name,
                },
                label: t.download,
              },
            ],
          },
        ],
      });
    }
  }
);
