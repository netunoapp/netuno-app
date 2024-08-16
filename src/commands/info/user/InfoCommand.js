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
const emojis_json_1 = __importDefault(require("../../../../data/emojis.json"));
const oceanic_js_1 = require("oceanic.js");
const getEmoji_1 = __importDefault(require("../../../helpers/getEmoji"));
exports.default = new Command_1.default("user info", (_a) => __awaiter(void 0, [_a], void 0, function* ({ t, app, author, interaction }) {
    var _b;
    const userOption = (_b = interaction.data.options.getUser("user", false)) !== null && _b !== void 0 ? _b : author;
    const user = yield app.rest.users.get(userOption.id);
    const badges = [user.bot ? emojis_json_1.default.app : emojis_json_1.default.user];
    const avatar = user.avatarURL(user.avatar && user.avatar.includes("a_") ? "gif" : "png", 4096);
    const banner = user.bannerURL(user.banner && user.banner.includes("a_") ? "gif" : "png", 4096);
    if (user.publicFlags) {
        for (const [key, val] of Object.entries(oceanic_js_1.Constants.UserFlags)) {
            //@ts-ignore
            if (user.publicFlags & val) {
                //@ts-ignore
                badges.push(emojis_json_1.default.badges[`${key.toLowerCase().split("_").join(" ")}`]);
            }
        }
    }
    const embed = {
        color: 5793266,
        title: `${user.globalName ? user.globalName : user.tag}`,
        description: badges.filter((v, i, s) => s.indexOf(v) === i).join(""),
        fields: [
            {
                inline: true,
                name: `${emojis_json_1.default.tag} ${t === null || t === void 0 ? void 0 : t.tag}`,
                value: `\`\`${user.tag}\`\``,
            },
            {
                inline: true,
                name: `${emojis_json_1.default.id} ${t === null || t === void 0 ? void 0 : t.id}`,
                value: `\`\`${user.id}\`\``,
            },
            {
                inline: true,
                name: `${emojis_json_1.default.mention} ${t === null || t === void 0 ? void 0 : t.mention}`,
                value: `\`\`${user.mention}\`\``,
            },
            {
                name: `${emojis_json_1.default.calendar} ${t.createdat}`,
                //@ts-ignore
                value: `<t:${parseInt(`${user.createdAt.getTime() / 1000}`)}:F> (<t:${parseInt(`${user.createdAt.getTime() / 1000}`)}:R>)`,
            },
        ],
    };
    if (banner)
        embed.image = { url: banner };
    if (avatar)
        embed.thumbnail = { url: avatar };
    const userEmoji = yield (0, getEmoji_1.default)(emojis_json_1.default.user);
    interaction.createFollowup({
        embeds: [embed],
        components: [
            {
                type: 1,
                components: [
                    {
                        type: 2,
                        style: 5,
                        emoji: {
                            id: userEmoji.id,
                            name: userEmoji.name,
                        },
                        label: t.profile,
                        url: `https://discord.com/users/${user.id}`,
                    },
                ],
            },
        ],
    });
}));
