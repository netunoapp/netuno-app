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
exports.default = new Command_1.default("purge all", (_a) => __awaiter(void 0, [_a], void 0, function* ({ t, app, interaction }) {
    if (!interaction.guild) {
        interaction.createFollowup({ content: t["!server"] });
        return;
    }
    if (!interaction.channel)
        return;
    const channel = interaction.guild.channels.get(interaction.channel.id);
    if (channel) {
        interaction.createFollowup({
            content: t.purge_all,
        });
        yield interaction.guild.createChannel(channel.type, {
            name: channel.name,
            position: channel.position,
            parentID: channel.parentID,
            topic: channel.type === 0 ? channel.topic : undefined,
            nsfw: channel.type !== 4 ? channel.nsfw : false,
            availableTags: channel.type === 15 ? channel.availableTags : undefined,
            defaultSortOrder: channel.type === 15 ? channel.defaultSortOrder : undefined,
            defaultForumLayout: channel.type === 15 ? channel.defaultForumLayout : undefined,
            defaultReactionEmoji: channel.type === 15 ? channel.defaultReactionEmoji : undefined,
            rtcRegion: channel.type === (2 || 13) ? channel.rtcRegion : undefined,
            bitrate: channel.type === (2 || 13) ? channel.bitrate : undefined,
            rateLimitPerUser: channel.type === (2 || 13) ? channel.rateLimitPerUser : undefined,
            userLimit: channel.type === 2 ? channel.userLimit : undefined,
            permissionOverwrites: channel.permissionOverwrites.map((p) => p),
            defaultAutoArchiveDuration: channel.type === (0 || 5)
                ? channel.defaultAutoArchiveDuration
                : undefined,
            videoQualityMode: channel.type === 2 ? channel.videoQualityMode : undefined,
        });
        channel.delete();
    }
}));
