const Command = require("../../base/Command");

module.exports = new Command("encode binary", async ({ interaction }) => {
  const text = interaction.options.getString("text", true);

  interaction.editReply(
    `\`\`\`${text
      .split("")
      .map((c) => c.charCodeAt(0).toString(2))
      .join(" ")}\`\`\``
  );
});
