import * as slash from "https://deno.land/x/slash_commands@v2.0.0/mod.ts";

// Pick up TOKEN and PUBLIC_KEY from ENV.
slash.init({ env: true });
// Handle for any other commands received.
slash.handle("*", (d) => d.reply("Unhandled Command", { ephemeral: true }));
// Log all errors.
slash.client.on("interactionError", console.error);

// Register a new slash command.
slash.register(
    // This can be an array of guild ids to be used for dev stage
    // or it can be a single guild id.
    // If you don't want to use dev stage, remove the `guildId` property.
    {
        name: "ping",
        description: "Ping!",
        options: [], // SlashCommandOptions
    },
    // This is the function that will be called when a user uses
    // the slash command.
    (d) => {
        d.reply("Pong!");
    }
);

// Handle for commands created/deleted.
slash.client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "ping") {
        await interaction.reply("Pong!");
    }
}