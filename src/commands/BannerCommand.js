const { EmbedBuilder } = require("discord.js");
const Command = require("../base/Command");

module.exports = new Command("user banner", async ({ interaction }) => {
  const user = interaction.options.getUser("user", false) ?? interaction.user;
  const banner = user.bannerURL({
    size: 4096,
    forceStatic: true,
    extension: user.banner && user.banner.includes("a_") ? "gif" : "png",
  });

  console.log(banner);

  interaction.editReply({
    embeds: [
      new EmbedBuilder()
        .setColor("Blurple")
        .setImage(banner)
        .setTitle(user.globalName ?? user.username)
    ],
  });
});