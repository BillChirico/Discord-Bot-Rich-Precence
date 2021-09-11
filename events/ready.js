const client = require("../index");

client.on("ready", () =>
{
    console.log(`${client.user.tag} is up and ready to go!`);
    client.user.setActivity("Follow Bapes at twitch.tv/Bapes", { type: "STREAMING", url: "https://www.twitch.tv/Bapes" });
});
