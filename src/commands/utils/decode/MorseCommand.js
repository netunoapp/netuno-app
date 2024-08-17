const Command = require("../../../base/Command");
const Morse = require("../../../../data/morse.json");

module.exports = new Command("decode morse", async ({ interaction }) => {
  const morse = {};
  const text = interaction.data.options.getString("text", true);

  for (const [key, val] of Object.entries(Morse)) {
    morse[val] = key;
  }

  interaction.createFollowup({
    content: `\`\`\`${text
      .split(" ")
      .map((char) => {
        return morse[char] ? morse[char] : "?";
      })
      .join("")}\`\`\``,
  });
});
