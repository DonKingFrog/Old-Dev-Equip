// Setup Variables
const Discord = require('discord.js');
const GatewayIntentBits = Discord.GatewayIntentBits;
const { GuildChannel, Guild, EmbedBuilder, ActivityType } = require("discord.js");

const client = new Discord.Client({
    allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: true,

    },
    
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent,
    ],

});


// Bot Startup Sequence
const startup = client.on("ready", () => {
    console.log("Bot is online!");    

    client.user.setActivity("over the server", { type: ActivityType.Watching });
});


// Login
client.login("MTE1NjE4MDMzMDY1NTUyNjkzMg.GBc7og.I5oL_tET0H-ilHbQaMCAmyGbWQ5kSdVVnhcQQo");