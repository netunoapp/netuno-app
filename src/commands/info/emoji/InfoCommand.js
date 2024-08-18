const Command = require("../../../base/Command");
const getEmoji = require("../../../helpers/getEmoji");
const emojis = require("../../../../data/emojis.json");

module.exports = new Command("emoji info", async ({ t, interaction }) => {
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
          thumbnail: {
            url: emoji.url,
          },
          fields: [
            {
              inline: true,
              name: `${emojis.id} ${t.id}`,
              value: `\`\`${emoji.id}\`\``,
            },
            {
              inline: true,
              name: `${emojis.mention} ${t.mention}`,
              value: `\`\`${emoji.mention}\`\``,
            },
            {
              inline: true,
              name: `${emojis.gif} ${t.animated}`,
              value: `\`\`${emoji.animated ? t.yes : t.no}\`\``,
            },
            {
              name: `${emojis.calendar} ${t.createdat}`,
              value: `<t:${parseInt(
                `${emoji.createdAt.getTime() / 1000}`
              )}:F> (<t:${parseInt(`${emoji.createdAt.getTime() / 1000}`)}:R>)`,
            },
          ],
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
