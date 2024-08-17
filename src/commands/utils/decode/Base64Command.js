const Command = require("../../../base/Command");

module.exports = new Command("decode base64", async ({ interaction }) => {
  const text = interaction.data.options.getString("text", true);

  interaction.createFollowup({
    content: `\`\`\`${Buffer.from(`${text}`, "base64").toString()}\`\`\``,
  });
});
