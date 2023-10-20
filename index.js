const Discord = require("discord.js")
const dotenv = require("dotenv")
const { REST } = require("@discordjs/rest")
const { Routes } = require("@discord-api-types/v9")
const fs = require ("fs")
const { Player } = require("discord-player")

dontenv.config()
const TOKEN = process.env.TOKEN

const LOAD_SLASH = process.argvp[2] == "load"

const CLIENT_ID = ""
const GUILD_ID = "937216666838896650"

const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_VOICE_STATES"
  ]
})

client.slashcommands = new Discord.Collection()
client.player = new Player(client, {
  ytdlOptions: {
    quality: "highestaudio",
    highWaterMark: 1 << 25
  }
})

let commands = []

const slashFiles = fs.readdirSyncc("./slash").filter(file => file.endsWith(".js");

for(const file of slashFiles){
  const slashcmd = require(`./slash/${file}`)
}
