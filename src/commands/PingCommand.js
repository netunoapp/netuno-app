const Command = require("../base/Command");

module.exports = new Command("ping", async ({ app, interaction }) => {
    await interaction.deferReply({ ephemeral: false });

    interaction.editReply(`> :ping_pong: **Pong!**\n- WS: \`${app.ws.ping}ms\``)
});