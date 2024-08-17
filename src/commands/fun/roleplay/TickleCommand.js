const Command = require("../../../base/Command");
const Gif = require("../../../helpers/GifAPI");

module.exports = new Command(
  "roleplay tickle",
  async ({ t, author, interaction }) => {
    const user = interaction.data.options.getUser("user", true);

    interaction.createFollowup({
      embeds: [
        {
          color: 5793266,
          description: t.tickle
            .replace("%a", author.mention)
            .replace("%u", user.mention),
          image: { url: await Gif.tickle() },
        },
      ],
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              style: 2,
              emoji: { name: "🔁" },
              customID: `tickle-${user.id}`,
            },
          ],
        },
      ],
    });
    
    setTimeout(() => {
      interaction.editOriginal({ components: [] });
    }, 30000);
  }
);
