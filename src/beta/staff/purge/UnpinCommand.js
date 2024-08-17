const Command = require("../../../base/Command");

module.exports = new Command(
  "purge messages unpin",
  async ({ interaction, t }) => {
    const limit = interaction.data.options.getNumber("amount", false) ?? 2000;

    if (interaction.channel && interaction.channel.type === 0) {
      await interaction.channel
        .purge({
          limit,
          filter: (m) => !m.pin,
        })
        .then((c) => {
          interaction.createFollowup({
            content: t.purge_messages.replace("%c", `${c}`),
          });
        });
    }
  }
);
