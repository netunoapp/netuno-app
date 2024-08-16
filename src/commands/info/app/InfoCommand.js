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
const Command_1 = __importDefault(require("../../../base/Command"));
const getApp_1 = require("../../../helpers/getApp");
const emojis_json_1 = __importDefault(require("../../../../data/emojis.json"));
const getEmoji_1 = __importDefault(require("../../../helpers/getEmoji"));
exports.default = new Command_1.default("app info", (_a) => __awaiter(void 0, [_a], void 0, function* ({ t, app, interaction }) {
    var _b, _c;
    const userOption = interaction.data.options.getUser("user", true);
    const user = yield app.rest.users.get(userOption.id);
    if (!user.bot) {
        interaction.createFollowup({ content: `${emojis_json_1.default.no} │ ${t["!app"]}` });
        return;
    }
    const app2 = yield (0, getApp_1.getApp)(user.id);
    const avatar = user.avatarURL(((_b = user.avatar) === null || _b === void 0 ? void 0 : _b.includes("a_")) ? "gif" : "png", 4096);
    const banner = user.bannerURL(((_c = user.banner) === null || _c === void 0 ? void 0 : _c.includes("a_")) ? "gif" : "png", 4096);
    const components = [];
    const components2 = [];
    const embed = {
        color: 5793266,
        title: app2.name,
        fields: [
            {
                inline: true,
                name: `${emojis_json_1.default.id} ${t.id}`,
                value: `\`\`${app2.id}\`\``,
            },
            {
                inline: true,
                name: `💁 ${t.support}`,
                value: `\`\`${app2.guild_id}\`\``,
            },
            {
                inline: true,
                name: `${emojis_json_1.default.tag} ${t.tags}`,
                value: `${app2.tags && app2.tags[0]
                    ? app2.tags.map((t) => `\`\`${t}\`\``).join(", ")
                    : `\`\`${t.none}\`\``}`,
            },
            {
                inline: false,
                name: `:key: ${t.verifyKey}`,
                value: `\`\`${app2.verify_key}\`\``,
            },
        ],
    };
    if (banner)
        embed.image = { url: banner };
    if (avatar)
        embed.thumbnail = { url: avatar };
    if (app2.description)
        embed.description = app2.description;
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
            app2.app2.integration_types_config["0"]) {
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
            app2.app2.integration_types_config["1"]) {
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
