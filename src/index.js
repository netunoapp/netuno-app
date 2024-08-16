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
require("./database");
const App_1 = __importDefault(require("./base/App"));
const Handler_1 = __importDefault(require("./base/Handler"));
const app = new App_1.default({
    allowedMentions: {
        repliedUser: false,
        everyone: false,
        roles: false,
        users: false,
    },
    gateway: {
        intents: ["ALL"],
        //compress: true,
    },
    auth: `Bot ${process.env.TOKEN}`,
});
app.connect().then(() => __awaiter(void 0, void 0, void 0, function* () {
    const handler = new Handler_1.default(app);
    yield handler.loadLocales("locales/**/*.json");
    yield handler.loadEvents("dist/events/**/*.js");
    yield handler.loadCommands("dist/commands/**/*.js");
    yield handler.loadAutocompletes("dist/auto/**/*.js");
    yield handler.loadComponents("dist/components/**/*.js");
    yield handler.loadGlobalCommands("dist/global/commands/**/*.js");
}));
