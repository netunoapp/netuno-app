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
const Event_1 = __importDefault(require("../base/Event"));
exports.default = new Event_1.default("on", "interactionCreate", (app, interaction) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (interaction.isAutocompleteInteraction()) {
        const autocomplete = app.autocompletes.get(interaction.data.name);
        if (autocomplete)
            yield autocomplete.run({ app, interaction });
    }
    if (interaction.isComponentInteraction()) {
        const customID = interaction.data.customID
            .split("-")
            .join("")
            .replace(/\d+/g, "");
        const component = app.components.get(customID);
        const t = app.locales.get(interaction.locale);
        const author = interaction.member && interaction.member.user
            ? interaction.member.user
            : interaction.user;
        if (!t) {
            yield interaction.defer(64);
            interaction.createFollowup({
                content: "Language not supported!",
            });
            return;
        }
        if (component) {
            yield component.run({ t, app, author, interaction });
        }
    }
    if (interaction.isCommandInteraction()) {
        let name = interaction.data.name;
        const subcommand = interaction.data.options.getSubCommand();
        if (subcommand)
            name += subcommand.map((s) => ` ${s}`).join("");
        const t = app.locales.get(interaction.locale);
        const command = app.commands.get(name);
        const author = interaction.member && interaction.member.user
            ? interaction.member.user
            : interaction.user;
        if (!t) {
            yield interaction.defer(64);
            interaction.createFollowup({
                content: "Language not supported!",
            });
            return;
        }
        if (command) {
            const ephemeral = (_a = interaction.data.options.getBoolean("ephemeral", false)) !== null && _a !== void 0 ? _a : false;
            yield interaction.defer(ephemeral ? 64 : 0);
            yield command.run({ app, t, author, interaction });
        }
    }
}));
