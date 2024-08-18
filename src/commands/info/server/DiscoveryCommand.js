const Command = require("../../../base/Command");
const emojis = require("../../../../data/emojis.json");
const getEmoji = require("../../../helpers/getEmoji");

module.exports = new Command(
  "server discovery",
  async ({ t, interaction }) => {
    if (!interaction.guild) {
      interaction.createFollowup({ content: `${emojis.no} │ ${t["!server"]}` });
    } else {
      const url = interaction.guild.discoverySplashURL("png", 4096);

      if (!url) {
        interaction.createFollowup({
          content: `${emojis.no} │ ${t["!server_discovery"]}`,
        });
      } else {
        const downloadEmoji = await getEmoji(emojis.download);

        interaction.createFollowup({
          embeds: [
            {
              color: 5793266,
              image: {
                url: url,
              },
              title: interaction.guild.name,
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
  }
);
