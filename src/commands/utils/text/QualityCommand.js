const Command = require("../../../base/Command");

module.exports = new Command("text quality", async ({ interaction }) => {
  const text = interaction.data.options.getString("text", true);

  interaction.createFollowup({
    content: `\`\`\`${text
      .split("")
      .map((char) => {
        const code = char.toUpperCase().charCodeAt(0);
        return code >= 33 && code <= 126
          ? String.fromCharCode(code - 33 + 65281)
          : char;
      })
      .join("")}}\`\`\``,
  });
});
