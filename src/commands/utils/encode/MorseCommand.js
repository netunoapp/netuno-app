const Command = require("../../../base/Command");
const morse = require("../../../../data/morse.json");

module.exports = new Command("encode morse", async ({ interaction }) => {
  const text = interaction.options.getString("text", true);

  interaction.editReply(
    `\`\`\`${text
      .toUpperCase()
      .split("")
      .map((c) => (morse[c] ? morse[c] : morse["."]))
      .join(" ")}\`\`\``
  );
});
