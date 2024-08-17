const Command = require("../../../base/Command");

module.exports = new Command("text uppercase", async ({ interaction }) => {
  const text = interaction.data.options.getString("text", true);

  interaction.createFollowup({
    content: `\`\`\`${text.toUpperCase()}\`\`\``,
  });
});
