import {
    Client,
    Message,
    GatewayIntents
  } from 'https://deno.land/x/harmony@v2.6.1/mod.ts'
  
  const client = new Client({
    intents: [
      'GUILDS',
      'DIRECT_MESSAGES',
      'GUILD_MESSAGES'
    ],
    // token: optionally specify, otherwise DISCORD_TOKEN from env is used
  })
  
  // Listen for event when client is ready (Identified through gateway / Resumed)
  client.on('ready', () => {
    console.log(`Ready! User: ${client.user?.tag}`)
  })
  
  // Connect to gateway
  client.connect()