const Command = require("../../../base/Command");
const emojis = require("../../../../data/emojis.json");
const getEmoji = require("../../../helpers/getEmoji");

module.exports = new Command(
  "server role icon",
  async ({ t, interaction }) => {
    const role = interaction.data.options.getRole("role", true);

    if (!role.icon) {
      interaction.createFollowup({
        content: `${emojis.no} │ ${t["!role_icon"]}`,
      });
    } 
    
    else {
      const url = role.icon;
      const downloadEmoji = await getEmoji(emojis.download);

      interaction.createFollowup({
        embeds: [
          {
            color: 5793266,
            image: {
              url: url,
            },
            title: role.name,
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
