const Command = require("../../../base/Command");

module.exports = new Command("text lowercase", async ({ interaction }) => {
  const text = interaction.data.options.getString("text", true);

  interaction.createFollowup({
    content: `\`\`\`${text.toLowerCase()}\`\`\``,
  });
});
