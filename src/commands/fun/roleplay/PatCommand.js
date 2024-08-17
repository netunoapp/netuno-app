const Command = require("../../../base/Command");
const Gif = require("../../../helpers/GifAPI");

module.exports = new Command(
  "roleplay pat",
  async ({ t, author, interaction }) => {
    const user = interaction.data.options.getUser("user", true);

    interaction.createFollowup({
      embeds: [
        {
          color: 5793266,
          description: t.pat
            .replace("%a", author.mention)
            .replace("%u", user.mention),
          image: { url: await Gif.pat() },
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
              customID: `pat-${user.id}`,
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
