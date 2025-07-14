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
  if (message.author.bot) return;

  const input = message.content.toLowerCase();

  // List jawaban otomatis
  const responses = [
    "Hmmm... maksud kamu gimana tuh? 🤔",
    "Wah mantap juga tuh!",
    "Aku LorenzoBot, aku dengerin kamu kok 👂",
    "Haha iya iya 😄",
    "Ceritain dong lebih lanjut!",
    "Itu kayaknya penting ya?",
    "Gak ngerti tapi aku tetap support kamu 💪",
    "Oke noted 📝",
    "Wah aku juga pernah ngerasa gitu!",
    "Keren sih kamu 👏"
  ];

  // Kirim jawaban random
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  message.channel.send(randomResponse);
});

client.login(process.env.TOKEN);
client.login(process.env.TOKEN);
