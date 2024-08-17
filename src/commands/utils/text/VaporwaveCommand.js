const Command = require("../../../base/Command");

module.exports = new Command("text vaporwave", async ({ interaction }) => {
  const text = interaction.data.options.getString("text", true);

  interaction.createFollowup({
    content: `\`\`\`${text
      .split("")
      .map((char) => {
        const code = char.charCodeAt(0);
        return code >= 33 && code <= 126
          ? String.fromCharCode(code - 33 + 65281)
          : char;
      })
      .join("")}\`\`\``,
  });
});
