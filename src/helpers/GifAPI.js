
const Axios = require("axios");
const base = "https://nekos.life/api/v2/img/";

module.exports = class GifAPI {
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
