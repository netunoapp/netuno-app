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
const Component_1 = __importDefault(require("../base/Component"));
const GifAPI_1 = __importDefault(require("../helpers/GifAPI"));
exports.default = new Component_1.default("hug", (_a) => __awaiter(void 0, [_a], void 0, function* ({ t, author, app, interaction }) {
    const customID = interaction.data.customID.split("-");
    const userID = customID[1];
    const user = yield app.rest.users.get(userID);
    if (author.id !== userID) {
        yield interaction.defer(64);
        interaction.createFollowup({ content: t.notComp });
    }
    else {
        yield interaction.defer(0);
        interaction.createFollowup({
            embeds: [
                {
                    color: 5793266,
                    description: t.hug
                        .replace("%a", author.mention)
                        .replace("%u", user.mention),
                    image: { url: yield new GifAPI_1.default().getHug() },
                },
            ],
        });
        interaction.editFollowup(interaction.message.id, {
            components: []
        });
    }
}));
