const { EmbedBuilder } = require("discord.js");
const Command = require("../base/Command");

module.exports = new Command("user avatar", async ({ interaction }) => {
  const user = interaction.options.getUser("user", false) ?? interaction.user;
  const avatar = user.displayAvatarURL({
    size: 4096,
    extension: user.avatar && user.avatar.includes("a_") ? "gif" : "png",
  });

  console.log(avatar);

  interaction.editReply({
    embeds: [
      new EmbedBuilder()
        .setColor("Blurple")
        .setImage(avatar)
        .setTitle(user.globalName ?? user.username)
    ],
  });
});
