const Command = require("../../base/Command");

module.exports = new Command("translate", async ({ interaction }) => {
  if (!interaction.isMessageContextMenuCommand()) return;

  const to = interaction.locale === "pt-BR" ? "pt" : "en";
  const { content } = interaction.targetMessage;
  const { text } = await translate(content, { to });

  interaction.editReply(`\`\`\`${text}\`\`\``);
});
