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
const axios_1 = __importDefault(require("axios"));
const Command_1 = __importDefault(require("../../../base/Command"));
const emojis_json_1 = __importDefault(require("../../../../data/emojis.json"));
const HEX_REGEX = /^#?([a-fA-F0-9]{6})$/;
const regexRGB = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
exports.default = new Command_1.default("color info", (_a) => __awaiter(void 0, [_a], void 0, function* ({ t, interaction }) {
    let colorOption = interaction.data.options
        .getString("color", true)
        .replace("0x", "")
        .replace("#", "");
    const number = /^\d+$/.test(`${colorOption}`)
        ? Number(`${colorOption}`)
        : undefined;
    if (`${colorOption}`.match(regexRGB)) {
        const res = `${colorOption}`.match(regexRGB);
        if (res) {
            const red = parseInt(res[1]);
            const green = parseInt(res[2]);
            const blue = parseInt(res[3]);
            if (red >= 0 &&
                red <= 255 &&
                green >= 0 &&
                green <= 255 &&
                blue >= 0 &&
                blue <= 255) {
                colorOption = `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
            }
        }
    }
    if (number && number >= 0 && number <= 255) {
        colorOption = `#${number.toString(16)}${number.toString(16)}${number.toString(16)}`;
    }
    if (!`${colorOption}`.match(HEX_REGEX)) {
        interaction.createFollowup({ content: `${emojis_json_1.default.no} │ ${t["!hex"]}` });
    }
    else {
        const colorDecimal = parseInt(colorOption, 16);
        const { data } = yield axios_1.default.get(`https://www.thecolorapi.com/id?hex=${colorOption}`);
        interaction.createFollowup({
            embeds: [
                {
                    color: colorDecimal,
                    title: `:art: ${data.name.value}`,
                    thumbnail: {
                        url: `http://www.singlecolorimage.com/get/${colorOption}/50x50`,
                    },
                    fields: [
                        {
                            inline: true,
                            name: "RGB",
                            value: `\`\`${data.rgb.value}\`\``,
                        },
                        {
                            inline: true,
                            name: "HEX",
                            value: `\`\`${data.hex.value}\`\``,
                        },
                        {
                            inline: true,
                            name: "HSV",
                            value: `\`\`${data.hsv.value}\`\``,
                        },
                        {
                            inline: true,
                            name: "CMYK",
                            value: `\`\`${data.cmyk.value}\`\``,
                        },
                        {
                            inline: true,
                            name: "XYZ",
                            value: `\`\`${data.XYZ.value}\`\``,
                        },
                        {
                            inline: true,
                            name: "HSL",
                            value: `\`\`${data.hsl.value}\`\``,
                        },
                        {
                            inline: true,
                            name: "DECIMAL",
                            value: `\`\`${colorDecimal}\`\``,
                        },
                    ],
                },
            ],
        });
    }
}));
function toHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
