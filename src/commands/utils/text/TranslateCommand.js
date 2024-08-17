const { translate } = require("@vitalets/google-translate-api");
const Command = require("../../../base/Command");

module.exports = new Command("text translate", async ({ interaction }) => {
  const to = interaction.data.options.getString("to", true);
  const Text = interaction.data.options.getString("text", true);
  const { text } = await translate(Text, { to });

  interaction.createFollowup({
    content: `\`\`\`${text}\`\`\``,
  });
});
