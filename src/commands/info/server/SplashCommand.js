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
exports.default = new Command_1.default("server splash", (_a) => __awaiter(void 0, [_a], void 0, function* ({ t, interaction }) {
    if (!interaction.guild) {
        interaction.createFollowup({ content: `${emojis_json_1.default.no} │ ${t["!server"]}` });
    }
    else {
        const url = interaction.guild.splashURL("png", 4096);
        if (!url) {
            interaction.createFollowup({ content: `${emojis_json_1.default.no} │ ${t["!splash"]}` });
        }
        else {
            const downloadEmoji = yield (0, getEmoji_1.default)(emojis_json_1.default.download);
            interaction.createFollowup({
                embeds: [
                    {
                        color: 5793266,
                        image: {
                            url: url,
                        },
                        title: interaction.guild.name,
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
    }
}));
