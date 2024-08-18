const Command = require("../../../base/Command");
const emojis = require("../../../../data/emojis.json");

module.exports = new Command("invite info", async ({ t, app, interaction }) => {
  const code = interaction.data.options
    .getString("code", true)
    .replace("http://discord.gg/", "");

  const invite = await app.rest.channels
    .getInvite(code, { withCounts: true, withExpiration: true })
    .catch(() => undefined);

  if (!invite) {
    interaction.createFollowup({ content: `${emojis.no} │ ${t["!invite"]}` });
  } else {
    if (!invite.guild) {
      interaction.createFollowup({ content: `${emojis.no} │ ${t["!server"]}` });
    } else {
      const date = invite.createdAt ? invite.createdAt.getDate() : undefined;
      const icon = invite.guild.iconURL(
        invite.guild.icon && invite.guild.icon.includes("a_") ? "gif" : "png",
        4096
      );
      const splash = invite.guild.splashURL(
        invite.guild.splash && invite.guild.splash.includes("a_")
          ? "gif"
          : "png",
        4096
      );

      const embed = {
        color: 5793266,
        title: invite.guild.name,
        fields: [
          {
            inline: true,
            name: `${emojis.id} ${t.id}`,
            value: `\`\`${invite.guild.id}\`\``,
          },
          {
            inline: true,
            name: `${emojis.channel[0]} ${t.channel}`,
            value: `\`\`${invite.channel.name}\`\` (id: \`\`${invite.channel.id}\`\`)`,
          },
          {
            name: `:bar_chart: ${t.stats}`,
            value: t.stats_val3
              .replace("%o", `${invite.approximatePresenceCount}`)
              .replace("%f", `${invite.approximateMemberCount}`),
          },
        ],
      };
      if (splash) embed.image = { url: splash };
      if (icon) embed.thumbnail = { url: icon };

      if (invite.guild.description)
        embed.description = invite.guild.description;

      if (date) {
        embed.fields.push({
          name: `${emojis.calendar} ${t.createdat}`,
          value: `<t:${parseInt(`${date / 1000}`)}:F> (<t:${parseInt(
            `${date / 1000}`
          )}:R>)`,
        });
      }

      if (invite.guild.features && invite.guild.features[0]) {
        embed.fields.push({
          name: `✨ ${t.resources}`,
          value: invite.guild.features
            .map((f) => `\`\`${f.toLowerCase().split("_").join(" ")}\`\``)
            .join(", "),
        });
      }

      interaction.createFollowup({ embeds: [embed] });
    }
  }
});
