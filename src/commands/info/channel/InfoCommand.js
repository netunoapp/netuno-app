const Command = require("../../../base/Command");
const emojis = require("../../../../data/emojis.json");

module.exports = new Command(
  "server channel info",
  async ({ t, interaction }) => {
    if (!interaction.guild) {
      interaction.createFollowup({
        content: `${emojis.no} │ ${t["!server"]}`,
      });
    } 

    else if (!interaction.channel) {
      interaction.createFollowup({
        content: `${emojis.no} │ ${t["!channel"]}`,
      });
    } 
    
    else {
      const channelOption =
        interaction.data.options.getChannel("channel", false) ??
        interaction.channel;
      const channel = interaction.guild.channels.get(channelOption.id);

      if (!channel) return;
      
      const icon = channel.guild.iconURL("png", 4096);
      const nsfw = channel.type !== 4 ? channel.nsfw : false;
      const topic = channel.type === 0 ? channel.topic : undefined;

      const embed = {
        color: 5793266,
        title: `${
          interaction.guild.rulesChannelID === channel.id
            ? emojis.rules
            : emojis.channel[channel.type] + " "
        }${nsfw ? emojis.nsfw + " " : ""}${channel.name}`,
        fields: [
          {
            inline: true,
            name: `${emojis.pin} ${t.position}`,
            value: `\`\`${channel.position}º\`\``,
          },
          {
            inline: true,
            name: `${emojis.id} ${t.id}`,
            value: `\`\`${channel.id}\`\``,
          },
          {
            inline: true,
            name: `${emojis.mention} ${t.mention}`,
            value: `\`\`${channel.mention}\`\``,
          },
        ],
      };

      if (topic) embed.description = topic;
      if (icon) embed.thumbnail = { url: icon };
      if (channel.parent) {
        embed.fields.push({
          name: `${emojis.channel["4"]} ${t.category}`,
          value: `\`\`${channel.parent.name}\`\` (id \`\`${channel.parent.id}\`\`)`,
        });
      }

      embed.fields.push({
        name: `${emojis.calendar} ${t.createdat}`,
        value: `<t:${parseInt(
          `${channel.createdAt.getTime() / 1000}`
        )}:F> (<t:${parseInt(`${channel.createdAt.getTime() / 1000}`)}:R>)`,
      });

      interaction.createFollowup({ embeds: [embed] });
    }
  }
);
