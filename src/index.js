import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';
import eventHandler from './handlers/eventHandler.js';
import commandHandler from './handlers/commandHandler.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

commandHandler(client);
eventHandler(client);

client.login(process.env.DISCORD_TOKEN);
