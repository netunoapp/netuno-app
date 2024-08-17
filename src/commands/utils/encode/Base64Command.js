const Command = require("../../../base/Command");

module.exports = new Command("encode base64", async ({ interaction }) => {
  const text = interaction.data.options.getString("text", true);
  
  interaction.createFollowup({
    content: `\`\`\`${Buffer.from(`${text}`).toString("base64")}\`\`\``,
  });
});
