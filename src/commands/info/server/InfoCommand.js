const Command = require("../../../base/Command");
const emojis = require("../../../../data/emojis.json");
const { EmbedBuilder } = require("discord.js");

module.exports = new Command("server info", async ({ t, app, interaction }) => {
  if (!interaction.isChatInputCommand()) return;

  const server = interaction.guild;

  if (!server) return;

  const icon = server.iconURL({
    size: 4096,
    extension: server.icon && server.icon.includes("a_") ? "gif" : "png",
  });
  const banner = server.bannerURL({
    size: 4096,
    extension: server.banner && server.banner.includes("a_") ? "gif" : "png",
  });
  const owner = await app.users.fetch(server.ownerId);

  const embed = new EmbedBuilder()
    .setColor("Blurple")
    .setTitle(server.name)
    .addFields(
      {
        inline: true,
        name: `${emojis.id} ${t.id}`,
        value: `\`\`${server.id}\`\``,
      },
      {
        inline: true,
        name: `${emojis.owner} ${t.owner}`,
        value: `\`\`${owner.globalName ?? owner.username}\`\` (id: \`\`${
          server.ownerId
        }\`\`)`,
      },
      {
        name: `:bar_chart: ${t.stats}`,
        value: t.stats_val2
          .replace("%m", `${interaction.guild.memberCount}`)
          .replace("%b", `${interaction.guild.premiumSubscriptionCount}`)
          .replace("%t", `${interaction.guild.premiumTier}`)
          .replace("%c", `${interaction.guild.channels.cache.size}`)
          .replace("%r", `${interaction.guild.roles.cache.size}`)
          .replace("%e", `${interaction.guild.emojis.cache.size}`),
      },
      {
        name: `${emojis.calendar} ${t.createdat}`,
        value: `<t:${parseInt(
          `${interaction.guild.createdAt.getTime() / 1000}`
        )}:F> (<t:${parseInt(
          `${interaction.guild.createdAt.getTime() / 1000}`
        )}:R>)`,
      }
    );

  if (banner) embed.setImage(banner);
  if (icon) embed.setThumbnail(icon);
  if (server.description) embed.setDescription(server.description);

  interaction.editReply({ embeds: [embed] });
});
