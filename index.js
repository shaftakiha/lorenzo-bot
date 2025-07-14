const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

// ================== QUOTE & CERITA ==================

const lorenzoReplies = [
  'Aku adalah yang terbaik... dan sisanya hanya figuran dalam panggung Don Lorenzo! 🎭',
  'Gigi emasku lebih bersinar dari piala dunia. 🦷✨',
  'Jenius seperti aku hanya muncul sekali dalam seribu tahun. 😎',
  'Topengku lebih bernilai dari seluruh timmu. 💰🎭',
  'Kalau kau mau menang, kau harus lebih gila dari musuhmu. Itu hukum di medan perang! 💀⚽',
  'Aku tinggal di tempat kumuh... lalu Snuffy memberiku gigi emas. 💀🦷',
  'Yo Michael 😎',
  'Aku tidak menjaga gawang... aku menjaga harga diriku agar tidak jatuh ke level kalian. 😤',
  'Aku bisa menjaga dua hal sekaligus: bola dan egoku. Dan keduanya tak bisa kau curi. 💼',
  'Aura kejayaanku bisa melelehkan mentalmu. 🌋',
  'Aku adalah sistem, virus, dan glitch dalam permainan ini. 💻👾',
  'Gimme money 💸',
  'Mereka memberi emas ke raja. Jadi mereka memberikannya padaku. 👑🦷',
  'Aku menjaga gawang bukan untuk menang... tapi untuk mempermalukan lawan. 😈',
  'Aku tidak berlari... aku memburu. ⚔️'
];

// ================== CERITA LENGKAP ==================

const ceritaLorenzo = `Aku tinggal di tempat kumuh saat masih kecil. Orang tuaku membuangku. Aku bertahan hidup di jalan dengan menipu orang demi uang mereka.

Setelah menjalani kehidupan yang buruk begitu lama, aku mulai kehilangan harapan. Aku hampir mati...

Lalu Snuffy datang dan berbicara padaku.

"Heh, Nak... mau bermain sepak bola denganku?" katanya.

Aku yang tersungkur lemas cuma menjawab, "Beri aku uang."

Snuffy tertawa, lalu berkata, "Tentu. Berapa banyak yang kau inginkan? Mari kita berbisnis bersama."

Awalnya aku berpikir, siapa baj*ngan gila ini? Maka aku menantangnya: "Kalau kau serius, ganti gigiku yang busuk dengan gigi emas."

Tanpa banyak bicara, dia menyeretku ke dokter gigi dan... mereka benar-benar memberiku gigi emas.

Sejak hari itu, hidupku berubah.

Aku bukan lagi anak jalanan...  
Aku adalah **Don Lorenzo**, sang legenda Galactico. 💀⚽🦷`;

// ================== HANDLER ==================

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  const content = message.content.toLowerCase();

  // 🔥 Cerita
  if (content.startsWith('don!talk ceritakan pengalamanmu')) {
    message.channel.send(ceritaLorenzo);
    return;
  }

  // 🎭 Jawaban Random Don Lorenzo
  if (content.startsWith('don!talk')) {
    const reply = lorenzoReplies[Math.floor(Math.random() * lorenzoReplies.length)];
    message.channel.send(reply);
    return;
  }
});

// ================== LOGIN BOT ==================

client.login(process.env.TOKEN);
