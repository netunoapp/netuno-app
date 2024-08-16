const { Base } = require("oceanic.js");

/**
 *
 * @param {String} text
 * @returns
 */
module.exports = async function (text) {
  if (text.includes("%")) text = decodeURIComponent(text);
  if (!text.includes(":")) throw new Error("Emoji invalid!");

  const m = text.match(/<?(?:(a):)?(\w{2,32}):(\d{17,19})?>?/);

  if (!m) throw new Error("Emoji invalid!");

  return {
    createdAt: Base.getCreatedAt(`${m[3]}`),
    animated: Boolean(m[1]),
    name: m[2],
    id: m[3],
    mention: `<${Boolean(m[1]) ? "a" : ""}:${m[2]}:${m[3]}>`,
    url: `https://cdn.discordapp.com/emojis/${m[3]}.${
      Boolean(m[1]) ? "gif" : "png"
    }?quality=lossless`,
  };
};
