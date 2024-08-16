const Command = require("../../../base/Command");
const emojis = require("../../../../data/emojis.json");
const { EmbedBuilder } = require("discord.js");

module.exports = new Command("server role info", async ({ t, interaction }) => {
  if (!interaction.isChatInputCommand()) return;

  const role = interaction.options.getRole("role", true);
  const icon = role.iconURL({
    size: 4096,
    extension: role.icon && role.icon.includes("a_") ? "gif" : "png",
  });

  const embed = new EmbedBuilder()
    .setColor(role.color)
    .setTitle(`${emojis.roleicon} ${role.name}`)
    .addFields(
      {
        inline: true,
        name: `${emojis.pin} ${t.position}`,
        value: `\`\`${role.position}º\`\``,
      },
      {
        inline: true,
        name: `${emojis.color} ${t.color}`,
        value: `\`\`#${role.color.toString(16)}\`\``,
      },
      {
        inline: true,
        name: `${emojis.id} ${t.id}`,
        value: `\`\`${role.id}\`\``,
      },
      {
        inline: true,
        name: `${emojis.mention} ${t.mention}`,
        value: `\`\`${role.mention}\`\``,
      },
      {
        inline: true,
        name: `${emojis.config} ${t.characteristics}`,
        value: [
          `${role.mentionable ? emojis.enable : emojis.disable} ${
            t.mentionable
          }`,
          `${role.hoist ? emojis.enable : emojis.disable} ${t.hoist}`,
          `${role.managed ? emojis.enable : emojis.disable} ${t.managed}`,
        ].join("\n"),
      },
      {
        inline: true,
        name: `${emojis.calendar} ${t.createdat}`,
        value: `<t:${parseInt(
          `${role.createdAt.getTime() / 1000}`
        )}:F> (<t:${parseInt(`${role.createdAt.getTime() / 1000}`)}:R>)`,
      }
    );

  if (icon) embed.setThumbnail(icon);

  interaction.editReply({ embeds: [embed] });
});
