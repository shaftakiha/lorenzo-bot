const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`✅ Bot aktif sebagai ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return; // Biar gak bales diri sendiri

  switch (message.content.toLowerCase()) {
    case '!halo':
      message.channel.send(`Halo ${message.author.username}, aku LorenzoBot!`);
      break;

    case 'ping':
      message.channel.send('Pong!');
      break;

    case 'apa kabar?':
      message.channel.send('Aku baik, kamu gimana? 😊');
      break;

    case 'siapa kamu?':
      message.channel.send('Aku LorenzoBot, bot setia buatanmu! 🤖');
      break;

    case 'apa tugasmu?':
      message.channel.send('Tugas saya adalah membantu kamu, bang Namoy!');
      break;

    default:
      // Bisa juga kasih fallback:
      // message.channel.send("Maaf, aku belum ngerti itu 😅");
      break;
  }
});
client.login(process.env.TOKEN);
