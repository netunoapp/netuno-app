const Command = require("../../../base/Command");
const morse = require("../../../../data/morse.json");

module.exports = new Command("encode morse", async ({ interaction }) => {
  const text = interaction.data.options.getString("text", true);

  interaction.createFollowup({
    content: `\`\`\`${text
      .toUpperCase()
      .split("")
      .map(function (char) {
        return morse[char] ? morse[char] : morse["?"];
      })
      .join(" ")}\`\`\``,
  });
});
