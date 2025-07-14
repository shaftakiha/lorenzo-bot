const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
  console.log(`✅ Bot aktif sebagai ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.content === '!halo') {
    message.channel.send(`Halo ${message.author.username}, aku LorenzoBot!`);
  }
});

client.login(process.env.TOKEN);
