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
const getEmoji_1 = __importDefault(require("../../../helpers/getEmoji"));
exports.default = new Command_1.default("emoji view", (_a) => __awaiter(void 0, [_a], void 0, function* ({ t, interaction }) {
    const emojiOption = interaction.data.options.getString("emoji", true);
    const emoji = yield (0, getEmoji_1.default)(emojiOption).catch(() => undefined);
    if (!emoji) {
        interaction.createFollowup({ content: `${emojis_json_1.default.no} │ ${t["!emoji"]}` });
    }
    else {
        const downloadEmoji = yield (0, getEmoji_1.default)(emojis_json_1.default.download);
        interaction.createFollowup({
            embeds: [
                {
                    color: 5793266,
                    title: emoji.name,
                    image: {
                        url: emoji.url,
                    },
                },
            ],
            components: [
                {
                    type: 1,
                    components: [
                        {
                            type: 2,
                            style: 5,
                            url: emoji.url,
                            label: t.download,
                            emoji: {
                                id: downloadEmoji.id,
                                name: downloadEmoji.name,
                            },
                        },
                    ],
                },
            ],
        });
    }
}));
