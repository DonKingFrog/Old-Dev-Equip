// Setup Variables
const express = require('express');
const Discord = require('discord.js');

const GatewayIntentBits = Discord.GatewayIntentBits;
const { GuildChannel, Guild, EmbedBuilder, ActivityType } = require("discord.js");

const Config = require("./Source/config.js");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Bot is online!")
});

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
  console.log("Bot should be online?");
  console.log("Bot is online!");
  require("./Source/register-commands.js");

  client.user.setActivity("over the server", { type: ActivityType.Watching });
});


// Interactions
const commands = client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand(), !require('fs').existsSync(`./Commands/${interaction.commandName}.js`)) { return };

  const { Run, Staff } = require(`./Commands/${interaction.commandName}.js`);
  if (Staff === true) {
    if (interaction.member.roles.cache.has("1099659332947292170")) {
      Run(client, interaction);
    } else {
      const embed = new EmbedBuilder()
        .setTitle(`You're not allowed to use this command!`)
        .setColor("#ff2222");

      interaction.reply({
        embeds: [embed],
        ephemeral: true,
      });
    }
  } else {
    Run(client, interaction);
  }
});

/* Ping Detector
const pingDetector = client.on('messageCreate', (message) => {
  if (message.author.id === client.user.id) { return };
  if (message.author.bot) { return };
  if (message.member.roles.cache.has("1099659332947292170")) { return };

  for (let id in Config.Staff) {
    id = Config.Staff[id];

    if (message.content.includes(`<@${id}>`)) {
      console.log("Has pinged staff!")
      message.guild.members.fetch(message.author.id).then((user) => {
        user.timeout(3600000);
      });


      const embedLogger = new EmbedBuilder()
        .setTitle("🚨 Action Needed")
        .setDescription(`<@${message.author.id}> has pinged staff! \n \n **User received a 1 hour timeout.:** \n Message: ${message.url} \n \n This action violates the <#1088737068676567092> and must be warned!`)
        .setColor("#ff0000")
        .setTimestamp();

      client.channels.cache.get("1088907670569877614").send({
        embeds: [embedLogger],
      });

      break;
    } else if (message.content.includes(`<@everyone>`)) {
      message.guild.members.fetch(message.author.id).then((user) => {
        user.timeout(3600000 * 24);
      });

      const embedLogger = new EmbedBuilder()
        .setTitle("🚨 Alert 🚨")
        .setDescription(`<@${message.author.id}> has mass pinged! \n \n **User received a 24 hour timeout.:** \n Message: ${message.url} \n \n This action violates the <#1088737068676567092> and must be warned!`)
        .setColor("#ffff00")
        .setTimestamp();

      client.channels.cache.get("1088907670569877614").send({
        embeds: [embedLogger],
      });

      break
    }
  }
});
*/

// Boost Detector
const boostDetector = client.on('guildMemberUpdate', (oldMember, newMember) => {
  const oldStatus = oldMember.premiumSince;
  const newStatus = newMember.premiumSince;

  if (!oldStatus && newStatus) {
    const embed = new EmbedBuilder()
      .setTitle(`<:NitroBoost:1088767255103410216>  Thank you for the boost! :heart: ${newMember.user.tag} :heart:`)
      .setTimestamp()
      .setColor("#ff4df3");

    client.channels.cache.get("1088741269334933544").send({ embeds: [embed] });
    newMember.roles.add("1088830542029541538");
  };

  if (oldStatus && !newStatus) {
    newMember.roles.remove("1088830542029541538");
  };
});

// Member Count
const memberCounter = client.on("messageCreate", (message) => {
  const Channel = client.channels.cache.get("1088733331945959445");
  Channel.setName(`〛Members: ${message.guild.memberCount}`);
});



// Login
client.login("MTEyNDA2OTY4OTg3MDUzMjY3OQ.GmMA8K.WAcPiKcvywbnuPL7FP3AePQ1Yz2HsVlUnYf-tE");
