const Command = require("../../../base/Command");

module.exports = new Command("purge all", async ({ t, app, interaction }) => {
  if (!interaction.guild) {
    interaction.createFollowup({ content: t["!server"] });
    return;
  }

  if (!interaction.channel) return;

  const channel = interaction.guild.channels.get(interaction.channel.id);

  if (channel) {
    interaction.createFollowup({
      content: t.purge_all,
    });

    await interaction.guild.createChannel(channel.type, {
      name: channel.name,
      position: channel.position,
      parentID: channel.parentID,
      topic: channel.type === 0 ? channel.topic : undefined,
      nsfw: channel.type !== 4 ? channel.nsfw : false,
      availableTags: channel.type === 15 ? channel.availableTags : undefined,
      defaultSortOrder:
        channel.type === 15 ? channel.defaultSortOrder : undefined,
      defaultForumLayout:
        channel.type === 15 ? channel.defaultForumLayout : undefined,
      defaultReactionEmoji:
        channel.type === 15 ? channel.defaultReactionEmoji : undefined,
      rtcRegion: channel.type === (2 || 13) ? channel.rtcRegion : undefined,
      bitrate: channel.type === (2 || 13) ? channel.bitrate : undefined,
      rateLimitPerUser:
        channel.type === (2 || 13) ? channel.rateLimitPerUser : undefined,
      userLimit: channel.type === 2 ? channel.userLimit : undefined,
      permissionOverwrites: channel.permissionOverwrites.map((p) => p),
      defaultAutoArchiveDuration:
        channel.type === (0 || 5)
          ? channel.defaultAutoArchiveDuration
          : undefined,
      videoQualityMode:
        channel.type === 2 ? channel.videoQualityMode : undefined,
    });

    channel.delete();
  }
});
