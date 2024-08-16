"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("../../base/Command"));
const emojis_json_1 = __importDefault(require("../../../data/emojis.json"));
const getApp_1 = require("../../helpers/getApp");
const getEmoji_1 = __importDefault(require("../../helpers/getEmoji"));
exports.default = new Command_1.default("info", (_a) => __awaiter(void 0, [_a], void 0, function* ({ t, app, interaction }) {
    const owner = yield app.rest.users.get(`${process.env.OWNER}`);
    const user = yield app.rest.users.get(app.user.id);
    const app2 = yield (0, getApp_1.getApp)(app.user.id);
    const avatar = user.avatarURL(user.avatar && user.avatar.includes("a_") ? "gif" : "png", 4096);
    const banner = user.bannerURL(user.banner && user.banner.includes("a_") ? "gif" : "png", 4096);
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
        {
            type: 2,
            style: 5,
            label: t.website,
            emoji: {
                name: `🌐`,
            },
            url: "https://netuno-website.vercel.app",
        },
        {
            type: 2,
            style: 5,
            label: t.support,
            emoji: {
                name: `💁`,
            },
            url: "https://netuno-website.vercel.app/support",
        },
    ];
    const components2 = [];
    const embed = {
        color: 5793266,
        title: user.username,
        fields: [
            {
                inline: true,
                name: `${emojis_json_1.default.owner} ${t.owner}`,
                value: `\`\`${owner.globalName}\`\` (id: \`\`${owner.id}\`\`)`,
            },
            {
                name: `:bar_chart: ${t.stats}`,
                value: t.stats_val
                    .replace("%u", `${app.guilds.reduce((acc, guild) => acc + guild.memberCount, 0)}`)
                    .replace("%g", `${app.guilds.size}`)
                    .replace("%s", `${app.shards.size}`),
            },
            {
                name: `${emojis_json_1.default.config} ${t.characteristics}`,
                value: [
                    `${app2.bot_public ? emojis_json_1.default.enable : emojis_json_1.default.disable} ${t.public}`,
                    `${app2.bot_require_code_grant ? emojis_json_1.default.enable : emojis_json_1.default.disable} ${t.brcg}`,
                ].join("\n"),
            },
            {
                name: `⏰ ${t.uptime}`,
                value: `<t:${parseInt(`${app.user.createdAt.getTime() / 1000}`)}:F> (<t:${parseInt(`${app.user.createdAt.getTime() / 1000}`)}:R>)`,
            },
        ],
    };
    if (banner)
        embed.image = { url: banner };
    if (avatar)
        embed.thumbnail = { url: avatar };
    if (app2.terms_of_service_url) {
        components2.push({
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
        components2.push({
            type: 2,
            style: 5,
            label: t.pp,
            emoji: {
                name: `🛡`,
            },
            url: app2.privacy_policy_url,
        });
    }
    const addServerEmoji = yield (0, getEmoji_1.default)(emojis_json_1.default.add_server);
    const addAppEmoji = yield (0, getEmoji_1.default)(emojis_json_1.default.add_app);
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
    }
    else {
        if (app2.integration_types_config &&
            app2.app2.integration_types_config["0"] &&
            app2.app2.integration_types_config["0"].oauth2_install_params &&
            app2.app2.integration_types_config["0"].oauth2_install_params
                .permissions &&
            app2.app2.integration_types_config["0"].oauth2_install_params.scopes &&
            app2.app2.integration_types_config["0"].oauth2_install_params.scopes[0]) {
            const res = app2.app2.integration_types_config["0"];
            components2.push({
                type: 2,
                style: 5,
                label: t.add_me,
                emoji: {
                    id: addServerEmoji.id,
                    name: addServerEmoji.name,
                },
                url: `https://discord.com/oauth2/authorize?client_id=${app2.id}&permissions=${res.oauth2_install_params.permissions}&integration_type=0&scope=${res.oauth2_install_params.scopes.join("+")}`,
            });
        }
        if (app2.integration_types_config &&
            app2.app2.integration_types_config["1"] &&
            app2.app2.integration_types_config["1"].oauth2_install_params &&
            app2.app2.integration_types_config["1"].oauth2_install_params
                .permissions &&
            app2.app2.integration_types_config["1"].oauth2_install_params.scopes &&
            app2.app2.integration_types_config["1"].oauth2_install_params.scopes[0]) {
            const res = app2.app2.integration_types_config["1"];
            components2.push({
                type: 2,
                style: 5,
                label: t.tryIt,
                emoji: {
                    id: addAppEmoji.id,
                    name: addAppEmoji.name,
                },
                url: `https://discord.com/oauth2/authorize?client_id=${app2.id}&permissions=${res.oauth2_install_params.permissions}&integration_type=1&scope=${res.oauth2_install_params.scopes.join("+")}`,
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
}));
