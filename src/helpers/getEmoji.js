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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const oceanic_js_1 = require("oceanic.js");
function default_1(text) {
    return __awaiter(this, void 0, void 0, function* () {
        if (text.includes("%"))
            text = decodeURIComponent(text);
        if (!text.includes(":"))
            throw new Error("Emoji invalid!");
        const m = text.match(/<?(?:(a):)?(\w{2,32}):(\d{17,19})?>?/);
        if (!m)
            throw new Error("Emoji invalid!");
        ;
        return {
            createdAt: oceanic_js_1.Base.getCreatedAt(`${m[3]}`),
            animated: Boolean(m[1]),
            name: m[2],
            id: m[3],
            mention: `<${Boolean(m[1]) ? "a" : ""}:${m[2]}:${m[3]}>`,
            url: `https://cdn.discordapp.com/emojis/${m[3]}.${Boolean(m[1]) ? "gif" : "png"}?quality=lossless`,
        };
    });
}
