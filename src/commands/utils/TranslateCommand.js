const Command = require("../../base/Command");
const { translate } = require("@vitalets/google-translate-api");

module.exports = new Command("translate", async ({ interaction }) => {
  const message = interaction.data.resolved.messages.map((m) => m.content)[0];
  const to = interaction.locale === "pt-BR" ? "pt" : "en";
  const { text } = await translate(message, { to });

  interaction.createFollowup({
    content: `\`\`\`${text}\`\`\``,
  });
});
