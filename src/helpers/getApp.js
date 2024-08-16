const Axios = require("axios");

module.exports = async function (id) {
  return await Axios.get(
    `https://discord.com/api/v10/applications/${id}/rpc`
  ).then((res) => res.data);
};
