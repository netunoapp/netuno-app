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
const GifAPI_1 = __importDefault(require("../../../helpers/GifAPI"));
exports.default = new Command_1.default("roleplay kiss", (_a) => __awaiter(void 0, [_a], void 0, function* ({ t, author, interaction }) {
    const user = interaction.data.options.getUser("user", true);
    interaction.createFollowup({
        embeds: [
            {
                color: 5793266,
                description: t.kiss
                    .replace("%a", author.mention)
                    .replace("%u", user.mention),
                image: { url: yield new GifAPI_1.default().getKiss() },
            },
        ],
        components: [
            {
                type: 1,
                components: [
                    {
                        type: 2,
                        style: 2,
                        emoji: { name: "🔁" },
                        customID: `kiss-${user.id}`,
                    },
                ],
            },
        ],
    });
    setTimeout(() => {
        interaction.editOriginal({ components: [] });
    }, 30000);
}));
