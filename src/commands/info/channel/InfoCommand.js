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
exports.default = new Command_1.default("server channel info", (_a) => __awaiter(void 0, [_a], void 0, function* ({ t, interaction }) {
    var _b, _c, _d, _e;
    if (!interaction.guild) {
        interaction.createFollowup({ content: `${emojis_json_1.default.no} │ ${t["!server"]}` });
    }
    else if (!interaction.channel) {
        interaction.createFollowup({ content: `${emojis_json_1.default.no} │ ${t["!channel"]}` });
    }
    else {
        const channelOption = (_b = interaction.data.options.getChannel("channel", false)) !== null && _b !== void 0 ? _b : interaction.channel;
        const channel = interaction.guild.channels.get(channelOption.id);
        if (!channel)
            return;
        const icon = channel.guild.iconURL("png", 4096);
        const nsfw = channel.type !== 4 ? channel.nsfw : false;
        const topic = channel.type === 0 ? channel.topic : undefined;
        const embed = {
            color: 5793266,
            title: `${((_c = interaction.guild) === null || _c === void 0 ? void 0 : _c.rulesChannelID) === channel.id
                ? emojis_json_1.default.rules
                : emojis_json_1.default.channel[channel.type] + " "}${nsfw ? emojis_json_1.default.nsfw + " " : ""}${channel.name}`,
            fields: [
                {
                    inline: true,
                    name: `${emojis_json_1.default.pin} ${t.position}`,
                    value: `\`\`${channel.position}º\`\``,
                },
                {
                    inline: true,
                    name: `${emojis_json_1.default.id} ${t.id}`,
                    value: `\`\`${channel.id}\`\``,
                },
                {
                    inline: true,
                    name: `${emojis_json_1.default.mention} ${t.mention}`,
                    value: `\`\`${channel.mention}\`\``,
                },
            ],
        };
        if (topic)
            embed.description = topic;
        if (icon)
            embed.thumbnail = { url: icon };
        if (channel.parent) {
            (_d = embed.fields) === null || _d === void 0 ? void 0 : _d.push({
                name: `${emojis_json_1.default.channel["4"]} ${t.category}`,
                value: `\`\`${channel.parent.name}\`\` (id \`\`${channel.parent.id}\`\`)`,
            });
        }
        (_e = embed.fields) === null || _e === void 0 ? void 0 : _e.push({
            name: `${emojis_json_1.default.calendar} ${t.createdat}`,
            value: `<t:${parseInt(`${channel.createdAt.getTime() / 1000}`)}:F> (<t:${parseInt(`${channel.createdAt.getTime() / 1000}`)}:R>)`,
        });
        interaction.createFollowup({ embeds: [embed] });
    }
}));
