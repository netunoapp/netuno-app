const Command = require("../../../src/base/Command");
const emojis = require("../../../data/emojis.json");
const getEmoji = require("../../../src/helpers/getEmoji");

module.exports = new Command("server vinaty", async ({ t, interaction }) => {
  if (!interaction.guild) {
    interaction.createFollowup({ content: `${emojis.no} │ ${t["!server"]}` });
  } else {
    const url = await interaction.guild.getVanityURL();

    if (!url) {
      interaction.createFollowup({ content: `${emojis.no} │ ${t["!vinaty"]}` });
    } else {
      const downloadEmoji = await getEmoji(emojis.download);

      interaction.createFollowup({
        embeds: [
          {
            color: 5793266,
            description: `${url}`,
            title: interaction.guild.name,
          },
        ],
        components: [
          {
            type: 1,
            components: [
              {
                type: 2,
                style: 5,
                url: `${url}`,
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
});
