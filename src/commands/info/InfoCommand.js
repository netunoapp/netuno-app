const Command = require("../../base/Command");
const emojis = require("../../../data/emojis.json");
const getApp = require("../../helpers/getApp");
const getEmoji = require("../../helpers/getEmoji");

module.exports = new Command("info", async ({ t, app, interaction }) => {
  const owner = await app.rest.users.get(`${process.env.OWNER}`);
  const user = await app.rest.users.get(app.user.id);
  const app2 = await getApp(app.user.id);
  const avatar = user.avatarURL(
    user.avatar && user.avatar.includes("a_") ? "gif" : "png",
    4096
  );
  const banner = user.bannerURL(
    user.banner && user.banner.includes("a_") ? "gif" : "png",
    4096
  );

  const components = [
    {
      type: 2,
      style: 5,
      label: t.vote,
      emoji: {
        name: `⭐`,
      },
      url: "https://top.gg/bot/1224034132238270566",
    },
  ];
  const components2 = [];
  const embed = {
    color: 5793266,
    title: user.username,
    fields: [
      {
        inline: true,
        name: `${emojis.owner} ${t.owner}`,
        value: `\`\`${owner.globalName}\`\` (id: \`\`${owner.id}\`\`)`,
      },
      {
        name: `:bar_chart: ${t.stats}`,
        value: t.stats_val
          .replace(
            "%u",
            `${app.guilds.reduce((acc, guild) => acc + guild.memberCount, 0)}`
          )
          .replace("%g", `${app.guilds.size}`)
          .replace("%s", `${app.shards.size}`),
      },
      {
        name: `${emojis.config} ${t.characteristics}`,
        value: [
          `${
            app2.bot_public
              ? emojis.enable
              : emojis.disable
          } ${t.public}`,
          `${
            app2.bot_require_code_grant
              ? emojis.enable
              : emojis.disable
          } ${t.brcg}`,
        ].join("\n"),
      },
      {
        name: `⏰ ${t.uptime}`,
        value: `<t:${parseInt(
          `${app.user.createdAt.getTime() / 1000}`
        )}:F> (<t:${parseInt(`${app.user.createdAt.getTime() / 1000}`)}:R>)`,
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
    if (app2.install_params) {
      const res = app2.install_params;

      if (res.scopes && res.scopes[0] && res.permissions) {
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
            res.permissions
          }&integration_type=0&scope=${res.scopes.join("+")}`,
        });
      }
    } else if (app2.integration_types_config && app2.integration_types_config["0"]) {
      const res = app2.integration_types_config["0"];

      if (
        res.oauth2_install_params &&
        res.oauth2_install_params.permissions &&
        res.oauth2_install_params.scopes &&
        res.oauth2_install_params.scopes[0]
      ) {
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
    }

    if (app2.integration_types_config && app2.integration_types_config["1"]) {
      const res = app2.integration_types_config["1"];

      if (
        res.oauth2_install_params &&
        res.oauth2_install_params.permissions &&
        res.oauth2_install_params.scopes &&
        res.oauth2_install_params.scopes[0]
      ) {
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
  }

  const row = [];

  if (components && components[0]) {
    row.push({
      type: 1,
      components,
    });
  }

  if (components2 && components2[0]) {
    row.push({
      type: 1,
      components: components2,
    });
  }

  interaction.createFollowup({
    embeds: [embed],
    components: row && row[0] ? row : undefined,
  });
});
