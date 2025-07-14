const { Client, GatewayIntentBits } = require('discord.js');
const { OpenAI } = require('openai');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

client.once('ready', () => {
  console.log(`✅ Bot aktif sebagai ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-
