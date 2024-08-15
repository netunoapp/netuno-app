const Command = require("../../../base/Commandand");

module.exports = new Command("decode binary", async ({ interaction }) => {
  const text = interaction.options.getString("text", true);

  interaction.editReply(
    `\`\`\`${text
      .split(" ")
      .map((x) => String.fromCharCode(parseInt(x, 2)))
      .join("")}\`\`\``
  );
});
