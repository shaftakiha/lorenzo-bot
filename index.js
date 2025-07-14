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
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'Kamu adalah LorenzoBot, bot AI yang ramah, lucu, dan bisa ngobrol seperti manusia.'
        },
        {
          role: 'user',
          content: message.content
        }
      ]
    });

    const reply = response.choices[0].message.content;
    message.channel.send(reply);
  } catch (error) {
    console.error(error);
    message.channel.send('Maaf, aku error 😅');
  }
});

client.login(process.env.TOKEN);
