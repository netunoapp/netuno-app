const emojis = require("../../../../data/emojis.json");
const Command = require("../../../base/Command");
const getEmoji = require("../../../helpers/getEmoji");

module.exports = new Command(
  "server member banner",
  async ({ t, interaction }) => {
    const member =
      interaction.data.options.getMember("member", false) ?? interaction.member;

    if (!member) {
      interaction.createFollowup({
        content: `${emojis.no} │ ${t["!member"]}`,
      });
    } else {
      const url = member.bannerURL(
        member.banner && member.banner.includes("a_") ? "gif" : "png",
        4096
      );

      if (!url) {
        interaction.createFollowup({
          content: `${emojis.no} │ ${t["!member_banner"]}`,
        });
        return;
      }

      const downloadEmoji = await getEmoji(emojis.download);

      interaction.createFollowup({
        embeds: [
          {
            color: 5793266,
            image: { url },
            title:
              member.nick ?? member.user.globalName ?? member.user.username,
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
