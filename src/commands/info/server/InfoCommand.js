const Command = require("../../../base/Command");
const emojis = require("../../../../data/emojis.json");

module.exports = new Command("server info", async ({ t, app, interaction }) => {
  if (!interaction.guild) {
    interaction.createFollowup({ content: `${emojis.no} │ ${t["!server"]}` });
    return;
  } else {
    const icon = interaction.guild.iconURL(
      interaction.guild.icon && interaction.guild.icon.includes("a_")
        ? "gif"
        : "png",
      4096
    );
    const banner = interaction.guild.bannerURL(
      interaction.guild.banner && interaction.guild.banner.includes("a_")
        ? "gif"
        : "png",
      4096
    );
    const owner = await app.rest.users.get(`${interaction.guild.ownerID}`);

    const embed = {
      color: 5793266,
      title: interaction.guild.name,
      fields: [
        {
          inline: true,
          name: `${emojis.id} ${t.id}`,
          value: `\`\`${interaction.guild.id}\`\``,
        },
        {
          inline: true,
          name: `${emojis.owner} ${t.owner}`,
          value: `\`\`${owner.globalName ?? owner.username}\`\` (id: ${
            interaction.guild.ownerID
          })`,
        },
        {
          name: `:bar_chart: ${t.stats}`,
          value: t.stats_val2
            .replace("%m", `${interaction.guild.memberCount}`)
            .replace("%b", `${interaction.guild.premiumSubscriptionCount}`)
            .replace("%t", `${interaction.guild.premiumTier}`)
            .replace("%c", `${interaction.guild.channels.size}`)
            .replace("%r", `${interaction.guild.roles.size}`)
            .replace("%e", `${interaction.guild.emojis.size}`),
        },
        {
          name: `${emojis.calendar} ${t.createdat}`,
          value: `<t:${parseInt(
            `${interaction.guild.createdAt.getTime() / 1000}`
          )}:F> (<t:${parseInt(
            `${interaction.guild.createdAt.getTime() / 1000}`
          )}:R>)`,
        },
      ],
    };

    if (interaction.guild.description)
      embed.description = interaction.guild.description;

    if (icon) embed.thumbnail = { url: icon };
    if (banner) embed.image = { url: banner };

    interaction.createFollowup({ embeds: [embed] });
  }
});
