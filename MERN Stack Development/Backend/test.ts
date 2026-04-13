import { Client, LocalAuth } from 'whatsapp-web.js'
import qrcode from 'qrcode-terminal'

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        args: ['--no-sandbox']
    }
})

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true })
})

client.on('ready', () => {
    console.log('Client is ready!')
})

client.on('message', async (msg) => {
    if (msg.fromMe) return;

    const text = msg.body.toLowerCase();

    if (text.includes('hi') || text.includes('hello')) {
        await msg.reply('Hello 👋 How can I help you?');
    }
    else if (text.includes('price')) {
        await msg.reply('Please tell me which product price you want.');
    }
    else {
        await msg.reply('Thanks for your message. We will get back to you.');
    }
});

client.initialize()
