const Command = require("../../../base/Command");
const emojis = require("../../../../data/emojis.json");
const getEmoji = require("../../../helpers/getEmoji");

module.exports = new Command("emoji view", async ({ t, interaction }) => {
  const emojiOption = interaction.data.options.getString("emoji", true);
  const emoji = await getEmoji(emojiOption).catch(() => undefined);

  if (!emoji) {
    interaction.createFollowup({ content: `${emojis.no} │ ${t["!emoji"]}` });
  } else {
    const downloadEmoji = await getEmoji(emojis.download);

    interaction.createFollowup({
      embeds: [
        {
          color: 5793266,
          title: emoji.name,
          image: {
            url: emoji.url,
          },
        },
      ],
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              style: 5,
              url: emoji.url,
              label: t.download,
              emoji: {
                id: downloadEmoji.id,
                name: downloadEmoji.name,
              },
            },
          ],
        },
      ],
    });
  }
});
