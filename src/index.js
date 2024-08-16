require("dotenv/config");
require("./database");

const App = require("./base/App")
const Handler = require("./base/Handler")
const app = new App({
    allowedMentions: {
        repliedUser: false,
        everyone: false,
        roles: false,
        users: false,
    },
    gateway: {
        intents: ["ALL"],
    },
    auth: `Bot ${process.env.TOKEN}`,
});

app.connect().then(async () => {
    const handler = new Handler(app);
    await handler.loadLocales("locales/**/*.json");
    await handler.loadEvents("dist/events/**/*.js");
    await handler.loadCommands("dist/commands/**/*.js");
    await handler.loadAutocompletes("dist/auto/**/*.js");
    await handler.loadComponents("dist/components/**/*.js");
    await handler.loadGlobalCommands("dist/global/commands/**/*.js");
});
