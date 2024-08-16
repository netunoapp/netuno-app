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
const Autocomplete_1 = __importDefault(require("../base/Autocomplete"));
const languages_json_1 = __importDefault(require("../../data/languages.json"));
exports.default = new Autocomplete_1.default("text", (_a) => __awaiter(void 0, [_a], void 0, function* ({ interaction }) {
    const lang = interaction.data.options.getString('to', false);
    const random = languages_json_1.default[Math.floor(Math.random() * languages_json_1.default.length)];
    let name = random;
    let value = random;
    if (lang && languages_json_1.default.includes(lang)) {
        name = lang;
        value = lang;
    }
    yield interaction.result([{ name, value }]);
}));
