import * as slash from "https://code.harmony.rocks/v2.0.0/deploy";

// Pick up TOKEN and PUBLIC_KEY from ENV.
slash.init({ env: true });
// Handle for any other commands received.
slash.handle("*", (d) => d.reply("Unhandled Command", { ephemeral: true }));
// Log all errors.
slash.client.on("interactionError", console.error);