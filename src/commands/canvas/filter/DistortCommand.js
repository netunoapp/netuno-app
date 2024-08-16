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
const Canvas_1 = __importDefault(require("../../../helpers/Canvas"));
const canvas_1 = require("canvas");
exports.default = new Command_1.default("filter distort", (_a) => __awaiter(void 0, [_a], void 0, function* ({ interaction, t }) {
    var _b, _c;
    const image = interaction.data.options.getString("image-url", true);
    if (!image || !(yield Canvas_1.default.validImage(image))) {
        interaction.createFollowup({ content: t["!image"] });
        return;
    }
    const level = (_b = interaction.data.options.getInteger("level", false)) !== null && _b !== void 0 ? _b : 90;
    const amplitude = (_c = interaction.data.options.getInteger("amplitude", false)) !== null && _c !== void 0 ? _c : 90;
    const canvas = (0, canvas_1.createCanvas)(500, 500);
    const ctx = canvas.getContext("2d");
    const background = yield (0, canvas_1.loadImage)(image);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.width);
    yield Canvas_1.default.distort(ctx, amplitude, 0, 0, canvas.width, canvas.height, level);
    interaction.createFollowup({
        files: [{ contents: canvas.toBuffer(), name: "image.png" }],
    });
}));
