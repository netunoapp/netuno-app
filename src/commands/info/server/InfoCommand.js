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
exports.default = new Command_1.default("server info", (_a) => __awaiter(void 0, [_a], void 0, function* ({ t, app, interaction }) {
    var _b;
    if (!interaction.guild) {
        interaction.createFollowup({ content: `${emojis_json_1.default.no} │ ${t["!server"]}` });
        return;
    }
    else {
        const icon = interaction.guild.iconURL("png", 4096);
        const banner = interaction.guild.bannerURL("png", 4096);
        const splash = interaction.guild.splashURL("png", 4096);
        const owner = yield app.rest.users.get(`${interaction.guild.ownerID}`);
        const embed = {
            color: 5793266,
            title: interaction.guild.name,
            fields: [
                {
                    inline: true,
                    name: `${emojis_json_1.default.id} ${t.id}`,
                    value: `\`\`${interaction.guild.id}\`\``,
                },
                {
                    inline: true,
                    name: `${emojis_json_1.default.owner} ${t.owner}`,
                    value: `\`\`${(_b = owner.globalName) !== null && _b !== void 0 ? _b : owner.username}\`\` (id: ${interaction.guild.ownerID})`,
                },
                {
                    name: `:bar_chart: ${t.stats}`,
                    value: t.stats_val2
                        .replace("%m", `${interaction.guild.memberCount}`)
                        .replace("%b", `${interaction.guild.premiumSubscriptionCount}`)
                        .replace("%t", `${interaction.guild.premiumTier}`)
                        .replace("%c", `${interaction.guild.channels.size}`)
                        .replace("%r", `${interaction.guild.roles.size}`)
                        .replace("%e", `${interaction.guild.emojis.size}`),
                },
                {
                    name: `${emojis_json_1.default.calendar} ${t.createdat}`,
                    value: `<t:${parseInt(`${interaction.guild.createdAt.getTime() / 1000}`)}:F> (<t:${parseInt(`${interaction.guild.createdAt.getTime() / 1000}`)}:R>)`,
                },
            ],
        };
        if (interaction.guild.description)
            embed.description = interaction.guild.description;
        if (icon)
            embed.thumbnail = { url: icon };
        if (splash)
            embed.image = { url: splash };
        if (banner)
            embed.image = { url: banner };
        interaction.createFollowup({ embeds: [embed] });
    }
}));
