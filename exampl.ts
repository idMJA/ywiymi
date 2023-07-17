interface User {
    name: string;
    id: number;
  }
   
  class UserAccount {
    name: string;
    id: number;
   
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }
   
  const user: User = new UserAccount("Murphys", 1);
  console.log(user);
  // { name: 'Murphys', id: 1 }
  ```
  - **TypeScript** is a superset of **JavaScript**. So any valid **JavaScript** code is also valid **TypeScript** code.
  - **TypeScript** is designed for development of large applications and transcompiles to **JavaScript**.
  - **TypeScript** is pure object oriented with classes, interfaces and statically typed like C# or Java.
  - **TypeScript** supports static typing through type annotations to enable type checking at compile time.
  - **TypeScript** supports tools for large-scale JavaScript applications for any browser, for any host, on any OS.
  - **TypeScript** compiles to readable, standards-based **JavaScript**.
  - **TypeScript** supports existing JavaScript libraries &amp; calls to **JavaScript** code.
  - **TypeScript** is open source.
  - **TypeScript** starts and ends with **JavaScript**.
  - **TypeScript** is a typed superset of **JavaScript** that compiles to plain **JavaScript**.
  - **TypeScript** is pure object oriented with classes, interfaces and statically typed like C# or Java.
  - **TypeScript** supports static typing through type annotations to enable type checking at compile time.
  - **TypeScript** supports tools for large-scale JavaScript applications for any browser, for any host, on any OS.
  - **TypeScript** compiles to readable, standards-based **JavaScript**.
  - **TypeScript** supports existing JavaScript libraries &amp; calls to **JavaScript** code.
  - **TypeScript** is open source.
  - **TypeScript** starts and ends with **JavaScript**.

- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
  ```ts
  // Path: exampl.ts
  // Compare this snippet from bot.ts:
  // import * as slash from "https://code.harmony.rocks/v2.0.0/deploy";
  // 
  // // Pick up TOKEN and PUBLIC_KEY from ENV.
  // slash.init({ env: true });
  // // Handle for any other commands received.
  // slash.handle("*", (d) => d.reply("Unhandled Command", { ephemeral: true }));
  // // Log all errors.
  // slash.client.on("interactionError", console.error);
  //
  // // Register a new slash command.
  // slash.register(
  //     // This can be an array of guild ids to be used for dev stage
  //     // or it can be a single guild id.
  //     // If you don't want to use dev stage, remove the `guildId` property.
  //     {
  //         name: "ping",
  //         description: "Ping!",
  //         options: [], // SlashCommandOptions
  //     },
  //     // This is the function that will be called when a user uses
  //     // the slash command.
  //     (d) => {
  //         d.reply("Pong!");
  //     }
  // );
  interface User {
      name: string;
      id: number;
  }
  