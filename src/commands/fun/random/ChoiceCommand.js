const Command = __importDefault(require("../../../base/Command"));

module.exports = new Command("random choice", async ({ interaction }) => {
  let options = interaction.data.options.getOptions();

  let choices = options.filter((c) => c.type === 3).map((c) => c.value);

  if (!choices) return;

  const choice = choices[Math.floor(Math.random() * choices.length)];

  interaction.createFollowup({ content: `\`\`\`${choice}\`\`\`` });
});
