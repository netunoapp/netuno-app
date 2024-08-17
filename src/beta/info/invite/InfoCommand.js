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
exports.default = new Command_1.default("invite info", (_a) => __awaiter(void 0, [_a], void 0, function* ({ t, app, interaction }) {
    var _b, _c, _d, _e, _f;
    const code = interaction.data.options
        .getString("code", true)
        .replace("http://discord.gg/", "");
    const invite = yield app.rest.channels
        .getInvite(code, { withCounts: true, withExpiration: true })
        .catch(() => undefined);
    if (!invite) {
        interaction.createFollowup({ content: `${emojis_json_1.default.no} │ ${t["!invite"]}` });
    }
    else {
        if (!invite.guild) {
            interaction.createFollowup({ content: `${emojis_json_1.default.no} │ ${t["!server"]}` });
        }
        else {
            const date = (_b = invite.createdAt) === null || _b === void 0 ? void 0 : _b.getTime();
            const icon = invite.guild.iconURL("png", 4096);
            const splash = invite.guild.splashURL("png", 4096);
            const embed = {
                color: 5793266,
                title: invite.guild.name,
                fields: [
                    {
                        inline: true,
                        name: `${emojis_json_1.default.id} ${t.id}`,
                        value: `\`\`${invite.guild.id}\`\``,
                    },
                    {
                        inline: true,
                        name: `${emojis_json_1.default.channel[0]} ${t.channel}`,
                        value: `\`\`${(_c = invite.channel) === null || _c === void 0 ? void 0 : _c.name}\`\`\n\`\`${(_d = invite.channel) === null || _d === void 0 ? void 0 : _d.id}\`\``,
                    },
                    {
                        name: `:bar_chart: ${t.stats}`,
                        value: t.stats_val3
                            .replace("%o", `${invite.approximatePresenceCount}`)
                            .replace("%f", `${invite.approximateMemberCount}`),
                    },
                ],
            };
            if (splash)
                embed.image = { url: splash };
            if (icon)
                embed.thumbnail = { url: icon };
            if (invite.guild.description)
                embed.description = invite.guild.description;
            if (date) {
                (_e = embed.fields) === null || _e === void 0 ? void 0 : _e.push({
                    name: `${emojis_json_1.default.calendar} ${t.createdat}`,
                    value: `<t:${parseInt(`${date / 1000}`)}:F> (<t:${parseInt(`${date / 1000}`)}:R>)`,
                });
            }
            if (invite.guild.features && invite.guild.features[0]) {
                (_f = embed.fields) === null || _f === void 0 ? void 0 : _f.push({
                    name: `✨ ${t.resources}`,
                    value: invite.guild.features
                        .map((f) => `\`\`${f.toLowerCase().split("_").join(" ")}\`\``)
                        .join(", "),
                });
            }
            interaction.createFollowup({ embeds: [embed] });
        }
    }
}));
