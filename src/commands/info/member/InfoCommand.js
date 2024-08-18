const emojis = require("../../../../data/emojis.json");
const Command = require("../../../base/Command");

module.exports = new Command(
  "server member info",
  async ({ t, interaction }) => {
    const member =
      interaction.data.options.getMember("member", false) ?? interaction.member;

    if (!member) {
      interaction.createFollowup({ content: `${emojis.no} │ ${t["!member"]}` });
    } else {
      const avatar = member.avatarURL(
        member.avatar && member.avatar.includes("a_") ? "gif" : "png",
        4096
      );
      const banner = member.bannerURL(
        member.banner && member.banner.includes("a_") ? "gif" : "png",
        4096
      );

      const embed = {
        color: 5793266,
        title: `${
          member.presence ? emojis.status[member.presence.status] + " " : ""
        }${member.nick ?? member.user.globalName ?? member.user.username}`,
        fields: [
          {
            inline: true,
            name: `${emojis.event} ${t.joinedat}`,
            value: `<t:${parseInt(
              `${member.createdAt.getTime() / 1000}`
            )}:F> (<t:${parseInt(`${member.createdAt.getTime() / 1000}`)}:R>)`,
          },
        ],
      };

      if (avatar) embed.thumbnail = { url: avatar };
      if (banner) embed.image = { url: banner };

      if (member.premiumSince) {
        embed.fields.push({
          inline: true,
          name: `🔮 ${t.premiumSince}`,
          value: `<t:${parseInt(
            `${member.premiumSince.getTime() / 1000}`
          )}:F> (<t:${parseInt(`${member.premiumSince.getTime() / 1000}`)}:R>)`,
        });
      }

      if (member.communicationDisabledUntil) {
        embed.fields.push({
          inline: true,
          name: `⏱ ${t.memberTimeout}`,
          value: `<t:${parseInt(
            `${member.communicationDisabledUntil.getTime() / 1000}`
          )}:F> (<t:${parseInt(
            `${member.communicationDisabledUntil.getTime() / 1000}`
          )}:R>)`,
        });
      }

      interaction.createFollowup({ embeds: [embed] });
    }
  }
);
