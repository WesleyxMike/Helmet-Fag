const Discord = require('discord.js');
const client = new Discord.Client();
// Initialize question variables

client.on('ready', () => {
    console.log('Helmet-Fag is ready. YAAAAAAYYY!!!');
});

client.on('message', message => {
  // These are questions asked to Helmet-fag, by addressing his name first.
    if ((message.content.startsWith("Fag ")) || (message.content.startsWith("fag "))) {
      // Ping
      if ((message.content.includes('Ping')) || (message.content.includes('ping'))) {
        message.reply("YAY!");
      }
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
