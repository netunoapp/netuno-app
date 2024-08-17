const Command = require("../../base/Command");

module.exports = new Command("ping", async ({ app, interaction }) => {
  const shard =
    interaction.guild && interaction.guild.shard
      ? interaction.guild.shard
      : app.shards.random();

  interaction.createFollowup({
    content: `> :ping_pong: **Pong!**\n- Shard (${shard.id}): \`${shard.latency}ms\``,
  });
});
