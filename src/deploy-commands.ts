import { REST, Routes } from "discord.js";
import * as commandModules from "./commands";
import config from "./config";

type Command = {
  data: unknown;
};

const commands = [];
for (const module of Object.values<Command>(commandModules)) {
  commands.push(module.data);
}

const rest = new REST().setToken(config.BOT_TOKEN);

rest
  .put(Routes.applicationCommands(config.CLIENT_ID), {
    body: commands,
  })
  .then(() => console.log("Successfully registered application commands."));
