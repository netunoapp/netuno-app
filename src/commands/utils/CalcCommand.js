const { evaluate } = require("mathjs");
const Command = require("../../base/Command");

module.exports = new Command("calc", async ({ interaction }) => {
  const expression = interaction.options.getString("expression", true);

  try {
    const res = evaluate(expression);

    interaction.editReply(`\`\`\`${res}\`\`\``);
  } catch (error) {
    interaction.editReply(`\`\`\`${error}\`\`\``);
  }
});
