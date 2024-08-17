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
exports.default = new Command_1.default("purge messages pin", (_a) => __awaiter(void 0, [_a], void 0, function* ({ t, interaction }) {
    var _b;
    const limit = (_b = interaction.data.options.getNumber("amount", false)) !== null && _b !== void 0 ? _b : 2000;
    if (interaction.channel && interaction.channel.type === 0) {
        interaction.channel.purge({ limit,
            filter: (m) => m.pinned,
        }).then((c) => __awaiter(void 0, void 0, void 0, function* () {
            interaction.createFollowup({
                content: t.purge_messages.replace("%c", `${c}`),
            });
        }));
    }
}));
