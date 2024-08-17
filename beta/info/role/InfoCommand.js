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
exports.default = new Command_1.default("server role info", (_a) => __awaiter(void 0, [_a], void 0, function* ({ t, interaction }) {
    const role = interaction.data.options.getRole("role", true);
    const embed = {
        color: role.color,
        title: `${emojis_json_1.default.roleicon} ${role.name}`,
        fields: [
            {
                inline: true,
                name: `${emojis_json_1.default.pin} ${t.position}`,
                value: `\`\`${role.position}º\`\``,
            },
            {
                inline: true,
                name: `${emojis_json_1.default.color} ${t.color}`,
                value: `\`\`#${role.color.toString(16)}\`\``,
            },
            {
                inline: true,
                name: `${emojis_json_1.default.id} ${t.id}`,
                value: `\`\`${role.id}\`\``,
            },
            {
                inline: true,
                name: `${emojis_json_1.default.mention} ${t.mention}`,
                value: `\`\`${role.mention}\`\``,
            },
            {
                inline: true,
                name: `${emojis_json_1.default.config} ${t.characteristics}`,
                value: [
                    `${role.mentionable ? emojis_json_1.default.enable : emojis_json_1.default.disable} ${t.mentionable}`,
                    `${role.hoist ? emojis_json_1.default.enable : emojis_json_1.default.disable} ${t.hoist}`,
                    `${role.managed ? emojis_json_1.default.enable : emojis_json_1.default.disable} ${t.managed}`,
                ].join("\n"),
            },
            {
                inline: true,
                name: `${emojis_json_1.default.calendar} ${t.createdat}`,
                //@ts-ignore
                value: `<t:${parseInt(`${role.createdAt.getTime() / 1000}`)}:F> (<t:${parseInt(`${role.createdAt.getTime() / 1000}`)}:R>)`,
            },
        ],
    };
    if (role.icon)
        embed.thumbnail = { url: role.icon };
    interaction.createFollowup({ embeds: [embed] });
}));
