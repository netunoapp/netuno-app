const Command = require("../../../base/Command");
const emojis = require("../../../../data/emojis.json");
const getEmoji = require("../../../helpers/getEmoji");

module.exports = new Command("server role info", async ({ t, interaction }) => {
  const role = interaction.data.options.getRole("role", true);
  const downloadEmoji = await getEmoji(emojis.download);

  const embed = {
    color: role.color,
    title: `${emojis.roleicon} ${role.name}`,
    fields: [
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
      },
    ],
  };

  const components = [];

  if (role.icon) {
    embed.thumbnail = { url: role.icon };
    components.push({
      url: role.icon,
      type: 2,
      style: 5,
      emoji: {
        id: downloadEmoji.id,
        name: downloadEmoji.name,
      },
      label: t.download,
    });
  }

  interaction.createFollowup({
    embeds: [embed],
    components:
      components && components[0]
        ? [
            {
              type: 1,
              components,
            },
          ]
        : undefined,
  });
});
