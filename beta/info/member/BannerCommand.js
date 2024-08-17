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
const getEmoji_1 = __importDefault(require("../../../helpers/getEmoji"));
exports.default = new Command_1.default("server member banner", (_a) => __awaiter(void 0, [_a], void 0, function* ({ t, interaction }) {
    var _b, _c, _d;
    const member = (_b = interaction.data.options.getMember("member", false)) !== null && _b !== void 0 ? _b : interaction.member;
    if (!member) {
        interaction.createFollowup({ content: `${emojis_json_1.default.no} │ ${t["!member"]}` });
    }
    else {
        const url = member.bannerURL(member.banner && member.banner.includes("a_") ? "gif" : "png", 4096);
        if (!url) {
            interaction.createFollowup({ content: `${emojis_json_1.default.no} │ ${t["!member_banner"]}` });
            return;
        }
        const downloadEmoji = yield (0, getEmoji_1.default)(emojis_json_1.default.download);
        interaction.createFollowup({
            embeds: [
                {
                    color: 5793266,
                    image: { url },
                    title: (_d = (_c = member.nick) !== null && _c !== void 0 ? _c : member.user.globalName) !== null && _d !== void 0 ? _d : member.user.username,
                },
            ],
            components: [
                {
                    type: 1,
                    components: [
                        {
                            url,
                            type: 2,
                            style: 5,
                            emoji: {
                                id: downloadEmoji.id,
                                name: downloadEmoji.name,
                            },
                            label: t.download,
                        },
                    ],
                },
            ],
        });
    }
}));
