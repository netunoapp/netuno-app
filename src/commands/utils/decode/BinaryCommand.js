const Command = require("../../../base/Command");

module.exports = new Command("decode binary", async ({ interaction }) => {
  const text = interaction.data.options.getString("text", true);

  interaction.createFollowup({
    content: `\`\`\`${text
      .split(" ")
      .map((x) => String.fromCharCode(parseInt(x, 2)))
      .join("")}\`\`\``,
  });
});
