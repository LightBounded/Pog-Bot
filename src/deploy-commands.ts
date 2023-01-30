import { REST, Routes, SlashCommandBuilder } from "discord.js";
import config from "./config";

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
];

const rest = new REST().setToken(config.BOT_TOKEN);

rest
  .put(Routes.applicationCommands(config.CLIENT_ID), {
    body: commands,
  })
  .then(() => console.log("Successfully registered application commands."));
