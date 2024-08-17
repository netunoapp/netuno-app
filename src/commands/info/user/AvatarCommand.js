const emojis = require("../../../../data/emojis.json");
const Command = require("../../../base/Command");
const getEmoji = require("../../../helpers/getEmoji");

module.exports = new Command(
  "user avatar",
  async ({ t, author, interaction }) => {
    const user = interaction.data.options.getUser("user", false) ?? author;
    const url = user.avatarURL(
      user.avatar && user.avatar.includes("a_") ? "gif" : "png",
      4096
    );

    if (!url) {
      interaction.createFollowup({
        content: `${emojis.no} │ ${t["!user_avatar"]}`,
      });
    } else {
      const downloadEmoji = await getEmoji(emojis.download);

      interaction.createFollowup({
        embeds: [
          {
            color: 5793266,
            image: { url },
            title:
              (_c = user.globalName) !== null && _c !== void 0 ? _c : user.tag,
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
