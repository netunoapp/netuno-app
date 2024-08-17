const Command = require("../../../base/Command");
const getApp = require("../../../helpers/getApp");
const emojis = require("../../../../data/emojis.json");
const getEmoji = require("../../../helpers/getEmoji");

module.exports = new Command("app info", async ({ t, app, interaction }) => {
  const userOption = interaction.data.options.getUser("user", true);
  const user = await app.rest.users.get(userOption.id);

  if (!user.bot) {
    interaction.createFollowup({
      content: `${emojis.no} │ ${t["!app"]}`,
    });
    return;
  }

  const app2 = await getApp(user.id);
  const avatar = user.avatarURL(
    user.avatar && user.avatar.includes("a_") ? "gif" : "png",
    4096
  );
  const banner = user.bannerURL(
    user.banner && user.banner.includes("a_") ? "gif" : "png",
    4096
  );
  const components = [];
  const components2 = [];

  const embed = {
    color: 5793266,
    title: app2.name,
    fields: [
      {
        inline: true,
        name: `${emojis.id} ${t.id}`,
        value: `\`\`${app2.id}\`\``,
      },
      {
        inline: true,
        name: `💁 ${t.support}`,
        value: `\`\`${app2.guild_id}\`\``,
      },
      {
        inline: true,
        name: `${emojis.tag} ${t.tags}`,
        value: `${
          app2.tags && app2.tags[0]
            ? app2.tags.map((t) => `\`\`${t}\`\``).join(", ")
            : `\`\`${t.none}\`\``
        }`,
      },
      {
        inline: false,
        name: `:key: ${t.verifyKey}`,
        value: `\`\`${app2.verify_key}\`\``,
      },
    ],
  };

  if (banner) embed.image = { url: banner };
  if (avatar) embed.thumbnail = { url: avatar };
  if (app2.description) embed.description = app2.description;

  if (app2.terms_of_service_url) {
    components.push({
      type: 2,
      style: 5,
      label: t.tos,
      emoji: {
        name: `📋`,
      },
      url: app2.terms_of_service_url,
    });
  }

  if (app2.privacy_policy_url) {
    components.push({
      type: 2,
      style: 5,
      label: t.pp,
      emoji: {
        name: `🛡`,
      },
      url: app2.privacy_policy_url,
    });
  }

  const addServerEmoji = await getEmoji(emojis.add_server);
  const addAppEmoji = await getEmoji(emojis.add_app);

  if (app2.custom_install_url) {
    components2.push({
      type: 2,
      style: 5,
      label: t.add_me,
      emoji: {
        id: addServerEmoji.id,
        name: addServerEmoji.name,
      },
      url: app2.custom_install_url,
    });
  } else {
    if (
      app2.integration_types_config &&
      app2.integration_types_config["0"]
    ) {
      const res = app2.integration_types_config["0"];
      components2.push({
        type: 2,
        style: 5,
        label: t.add_me,
        emoji: {
          id: addServerEmoji.id,
          name: addServerEmoji.name,
        },
        url: `https://discord.com/oauth2/authorize?client_id=${
          app2.id
        }&permissions=${
          res.oauth2_install_params.permissions
        }&integration_type=0&scope=${res.oauth2_install_params.scopes.join(
          "+"
        )}`,
      });
    }
    if (
      app2.integration_types_config &&
      app2.integration_types_config["1"]
    ) {
      const res = app2.integration_types_config["1"];
      components2.push({
        type: 2,
        style: 5,
        label: t.tryIt,
        emoji: {
          id: addAppEmoji.id,
          name: addAppEmoji.name,
        },
        url: `https://discord.com/oauth2/authorize?client_id=${
          app2.id
        }&permissions=${
          res.oauth2_install_params.permissions
        }&integration_type=1&scope=${res.oauth2_install_params.scopes.join(
          "+"
        )}`,
      });
    }
  }

  interaction.createFollowup({
    embeds: [embed],
    components: [
      {
        type: 1,
        components: components,
      },
      {
        type: 1,
        components: components2,
      },
    ],
  });
});
