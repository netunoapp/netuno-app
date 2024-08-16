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
exports.default = new Command_1.default("text anagram", (_a) => __awaiter(void 0, [_a], void 0, function* ({ t, interaction }) {
    const text = interaction.data.options.getString("text", true);
    const count = calcAnagram(text);
    const anagram = randomAnagram(text);
    interaction.createFollowup({
        content: t.anagram
            .replace("%a", anagram)
            .replace("%t", `${text}`)
            .replace("%c", `${count}`)
            .replace("\\n", "\n"),
    });
}));
//@ts-ignore
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
function calcAnagram(words) {
    const Words = words.toLowerCase().replace(/[^a-z]/g, "");
    const frequency = {};
    for (const letra of Words) {
        if (frequency[letra]) {
            frequency[letra]++;
        }
        else {
            frequency[letra] = 1;
        }
    }
    let divisor = 1;
    for (const freq of Object.values(frequency)) {
        //@ts-ignore
        divisor *= factorial(freq);
    }
    return factorial(Words.length) / divisor;
}
function randomAnagram(str) {
    let arr = str.split("");
    let n = arr.length;
    for (let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr.join("");
}
