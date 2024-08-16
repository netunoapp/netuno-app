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
const canvas_1 = require("canvas");
const Command_1 = __importDefault(require("../../../base/Command"));
exports.default = new Command_1.default("meme laranjo", (_a) => __awaiter(void 0, [_a], void 0, function* ({ interaction }) {
    var _b;
    let text = interaction.data.options.getString("text", true);
    yield (0, canvas_1.registerFont)("./assets/fonts/Arial.ttf", {
        family: "Arial",
    });
    const canvas = (0, canvas_1.createCanvas)(685, 494);
    const ctx = canvas.getContext("2d");
    const background = yield (0, canvas_1.loadImage)("./assets/images/memes/laranjo.jpg");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.font = "30px Arial";
    ctx.fillStyle = "#000";
    //@ts-ignore
    text = (_b = text.match(/.{1,50}/g)) === null || _b === void 0 ? void 0 : _b.join("\n");
    ctx.fillText(`${text}`, canvas.width / 50.9, canvas.height / 15.9);
    interaction.createFollowup({
        files: [
            {
                name: "laranjo.png",
                contents: canvas.toBuffer(),
            },
        ],
    });
}));
