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
const Command_1 = __importDefault(require("../../base/Command"));
const google_translate_api_1 = require("@vitalets/google-translate-api");
exports.default = new Command_1.default("translate", (_a) => __awaiter(void 0, [_a], void 0, function* ({ interaction }) {
    const message = interaction.data.resolved.messages.map((m) => m.content)[0];
    const to = interaction.locale === "pt-BR" ? "pt" : "en";
    const { text } = yield (0, google_translate_api_1.translate)(message, { to });
    interaction.createFollowup({
        content: `\`\`\`${text}\`\`\``,
    });
}));
