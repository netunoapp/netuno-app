const Command = require("../../../base/Command");

module.exports = new Command(
  "purge messages user",
  async ({ interaction, t }) => {
    const user = interaction.data.options.getUser("user", true);
    const limit = interaction.data.options.getNumber("amount", false) ?? 2000;

    if (interaction.channel && interaction.channel.type === 0) {
      await interaction.channel
        .purge({
          limit,
          filter: (m) => m.author.id === user.id,
        })
        .then((c) => {
          interaction.createFollowup({
            content: t.purge_messages.replace("%c", `${c}`),
          });
        });
    }
  }
);
