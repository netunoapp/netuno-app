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
const base = "https://nekos.life/api/v2/img/";
class GifAPI {
    constructor() { }
    getCat() {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get(`${base}/meow`).then((res) => res.data.url);
        });
    }
    getDog() {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get("https://dog.ceo/api/breeds/image/random").then((res) => res.data.message);
        });
    }
    getHug() {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get(`${base}/hug`).then((res) => res.data.url);
        });
    }
    getKiss() {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get(`${base}/kiss`).then((res) => res.data.url);
        });
    }
    getPat() {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get(`${base}/pat`).then((res) => res.data.url);
        });
    }
    getSlap() {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get(`${base}/slap`).then((res) => res.data.url);
        });
    }
    getTickle() {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get(`${base}/tickle`).then((res) => res.data.url);
        });
    }
}
exports.default = GifAPI;
