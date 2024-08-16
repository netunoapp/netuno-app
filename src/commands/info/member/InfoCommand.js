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
const emojis_json_1 = __importDefault(require("../../../../data/emojis.json"));
const Command_1 = __importDefault(require("../../../base/Command"));
exports.default = new Command_1.default("server member info", (_a) => __awaiter(void 0, [_a], void 0, function* ({ t, interaction }) {
    var _b, _c, _d, _e, _f, _g, _h;
    const member = (_b = interaction.data.options.getMember("member", false)) !== null && _b !== void 0 ? _b : interaction.member;
    if (!member) {
        interaction.createFollowup({ content: `${emojis_json_1.default.no} │ ${t["!member"]}` });
    }
    else {
        const avatar = member.avatarURL(member.avatar && member.avatar.includes("a_") ? "gif" : "png", 4096);
        const banner = member.bannerURL(member.banner && member.banner.includes("a_") ? "gif" : "png", 4096);
        const embed = {
            color: 5793266,
            title: `${member.presence && ((_c = member.presence) === null || _c === void 0 ? void 0 : _c.status)
                ? emojis_json_1.default.status[member.presence.status] + " "
                : ""}${(_e = (_d = member.nick) !== null && _d !== void 0 ? _d : member.user.globalName) !== null && _e !== void 0 ? _e : member.user.username}`,
            fields: [
                {
                    inline: true,
                    name: `${emojis_json_1.default.event} ${t.joinedat}`,
                    value: `<t:${parseInt(`${member.createdAt.getTime() / 1000}`)}:F> (<t:${parseInt(`${member.createdAt.getTime() / 1000}`)}:R>)`,
                },
            ],
        };
        if (avatar)
            embed.thumbnail = { url: avatar };
        if (banner)
            embed.image = { url: banner };
        if (member.premiumSince) {
            (_f = embed.fields) === null || _f === void 0 ? void 0 : _f.push({
                inline: true,
                name: `🔮 ${t.premiumSince}`,
                value: `<t:${parseInt(`${member.premiumSince.getTime() / 1000}`)}:F> (<t:${parseInt(`${member.premiumSince.getTime() / 1000}`)}:R>)`,
            });
        }
        if (member.communicationDisabledUntil) {
            (_g = embed.fields) === null || _g === void 0 ? void 0 : _g.push({
                inline: true,
                name: `⏱ ${t.memberTimeout}`,
                value: `<t:${parseInt(`${member.communicationDisabledUntil.getTime() / 1000}`)}:F> (<t:${parseInt(`${member.communicationDisabledUntil.getTime() / 1000}`)}:R>)`,
            });
        }
        if (member.roles && member.roles[0]) {
            (_h = embed.fields) === null || _h === void 0 ? void 0 : _h.push({
                name: `${emojis_json_1.default.roleicon} ${t.roles.replace("%r", `${member.roles.length}`)}`,
                value: `${member.roles
                    .map((r) => { var _a, _b; return `${(_b = (_a = interaction.guild) === null || _a === void 0 ? void 0 : _a.roles.get(r)) === null || _b === void 0 ? void 0 : _b.mention}`; })
                    .join(", ")}`,
            });
        }
        interaction.createFollowup({ embeds: [embed] });
    }
}));
