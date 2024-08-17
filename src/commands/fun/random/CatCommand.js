const Command = require("../../../base/Command");
const Gif = require("../../../helpers/GifAPI");

module.exports = new Command("random animal cat", async ({ interaction }) => {
  interaction.createFollowup({
    embeds: [
      {
        color: 5793266,
        image: {
          url: await Gif.cat(),
        },
      },
    ],
  });
});
