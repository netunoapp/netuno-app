const Axios = require("axios");
const base = "https://nekos.life/api/v2/img/";

module.exports = class GifAPI {
  static async cat() {
    return await Axios.get(`${base}/meow`).then((res) => res.data.url);
  }

  static async dog() {
    return await Axios.get("https://dog.ceo/api/breeds/image/random").then(
      (res) => res.data.message
    );
  }

  static async hug() {
    return await Axios.get(`${base}/hug`).then((res) => res.data.url);
  }

  static async kiss() {
    return await Axios.get(`${base}/kiss`).then((res) => res.data.url);
  }

  static async pat() {
    return await Axios.get(`${base}/pat`).then((res) => res.data.url);
  }

  static async slap() {
    return await Axios.get(`${base}/slap`).then((res) => res.data.url);
  }

  static async tickle() {
    return await Axios.get(`${base}/tickle`).then((res) => res.data.url);
  }
};
