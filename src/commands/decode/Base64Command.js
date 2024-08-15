const Command = require("../../base/Commandand");

module.exports = new Command("decode base64", async ({ interaction }) => {
  const text = interaction.options.getString("text", true);

  interaction.editReply(
    `\`\`\`${Buffer.from(`${text}`, "base64").toString()}\`\`\``
  );
});
