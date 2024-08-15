const Command = require("../../../base/Commandand");
const Morse = require("../../../../data/morse.json");

module.exports = new Command("decode morse", async ({ interaction }) => {
  const text = interaction.options.getString("text", true);
  const morse = {};

  for (const [key, val] of Object.entries(Morse)) {
    morse[val] = key;
  }

  interaction.editReply(
    `\`\`\`${text
      .split(" ")
      .map((c) => (morse[c] ? morse[c] : "?"))
      .join("")}\`\`\``
  );
});
