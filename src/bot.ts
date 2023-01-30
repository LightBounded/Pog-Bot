import { Client } from "discord.js";
import * as commandModules from "./commands";
import config from "./config";

const commands = Object(commandModules);

export const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

client.once("ready", () => {
  console.log("PogBot is ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;
  commands[commandName]?.execute(interaction, client);
});

client.login(config.BOT_TOKEN);
