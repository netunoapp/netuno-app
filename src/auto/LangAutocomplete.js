
const Autocomplete = require("../base/Autocomplete")
const languages = require("../../data/languages.json");

module.exports = new Autocomplete("text", async ({ interaction }) => {
    const lang = interaction.data.options.getString('to', false);

    const random = languages[Math.floor(Math.random() * languages.length)];
    let name = random;
    let value = random;

    if (lang && languages.includes(lang)) {
        name = lang;
        value = lang;
    }

    await interaction.result([{ name, value }]);
})
