# AI-Powered Discord Bot

This is a powerful and feature-rich Discord bot built with Node.js and discord.js. It's designed to be a comprehensive, production-grade solution with a modular architecture that supports a wide range of features.

## Project Goals

- **250+ Features:** The primary objective is to implement over 250 fully functional and documented features, covering moderation, utility, entertainment, and more.
- **Production-Ready:** The bot is built with a focus on stability, performance, and best practices to ensure it's ready for deployment on any server.
- **Modular Architecture:** A clean and organized codebase with a modular structure that makes it easy to add, remove, or modify features.
- **Comprehensive Documentation:** Every feature, system, and configuration option will be thoroughly documented to ensure ease of use and maintenance.

## Technologies Used

- **Node.js:** The bot is built on the latest LTS version of Node.js, ensuring a modern and efficient runtime environment.
- **discord.js v14+:** The bot utilizes the latest version of discord.js, a powerful Node.js module for interacting with the Discord API.
- **dotenv:** Environment variables are managed using the `dotenv` package, which loads them from a `.env` file.

## Project Structure

The bot's architecture is designed to be modular and scalable. Here's an overview of the key directories:

- `src/commands`: Contains all the slash command files, organized into subdirectories by category.
- `src/events`: Contains files that handle various Discord client events (e.g., `ready`, `interactionCreate`).
- `src/handlers`: Includes the core handlers for dynamically loading commands and events.
- `src/scripts`: Contains utility scripts, such as the command deployment script.
- `src/utils`: For any reusable utility functions.
- `src/config`: For storing configuration files.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (latest LTS version)
- A [Discord Bot Token](https://discord.com/developers/applications)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TawnyE/Ai-Discordbot.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Ai-Discordbot
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Create a `.env` file** by copying the example file:
   ```bash
   cp .env.example .env
   ```

5. **Add your bot's credentials** to the `.env` file:
   - `DISCORD_TOKEN`: Your Discord bot token.
   - `CLIENT_ID`: Your bot's client ID.
   - `GUILD_ID`: The ID of the server you'll be using for testing.

### Deploying Slash Commands

Before running the bot, you need to register the slash commands with Discord's API. Run the following command to do so:

```bash
node src/scripts/deploy-commands.js
```

You only need to run this script when you add or modify slash commands.

### Running the Bot

To start the bot, run the following command:

```bash
node src/index.js
```

## Features

### Utility

- `/ping`: Checks the bot's latency and replies with "Pong!".
