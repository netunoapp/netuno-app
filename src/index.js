const App = require("./base/App");
const Handler = require("./base/Handler");
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
    await handler.loadEvents("src/events/**/*.js");
    await handler.loadCommands("src/commands/**/*.js");
    await handler.loadAutocompletes("src/auto/**/*.js");
    await handler.loadGlobalCommands("src/global/commands/**/*.js");
});
