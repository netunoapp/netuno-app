const App = require("./base/App");
const Handler = require("./base/Handler");
const app = new App({
  intents: ["Guilds", "GuildMembers"],
});

app.login(process.env.TOKEN).then(async () => {
  const handler = new Handler(app);

  await handler.loadEvents("src/events/**/*.js");
});
