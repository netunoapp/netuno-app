const { evaluate } = require("mathjs");
const Command = require("../../base/Command");

module.exports = new Command("calc", async ({ interaction }) => {
  const expression = interaction.data.options.getString("expression", true);

  try {
    const res = evaluate(expression);

    interaction.createFollowup({
      content: `\`\`\`${res}\`\`\``,
    });
  } catch (error) {
    interaction.createFollowup({
      content: `\`\`\`${error}\`\`\``,
    });
  }
});
