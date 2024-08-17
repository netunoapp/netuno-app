const Command = require("../../../base/Command");

module.exports = new Command("encode binary", async ({ interaction }) => {
  const text = interaction.data.options.getString("text", true);

  interaction.createFollowup({
    content: `\`\`\`${text
      .split("")
      .map(function (char) {
        return char.charCodeAt(0).toString(2);
      })
      .join(" ")}\`\`\``,
  });
});
