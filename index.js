const { Client, GatewayIntentBits, Partials } = require('discord.js');
const fs = require('fs');
const config = require('./config.json'); 

const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,             
        GatewayIntentBits.GuildMessages,      
        GatewayIntentBits.MessageContent,     
    ],
    partials: [
        Partials.Message,                     
        Partials.Channel,                   
        Partials.Reaction                     
    ]
});

const quotes = JSON.parse(fs.readFileSync('citations.json', 'utf8'));

bot.once('ready', () => {
    console.log(`${bot.user.tag} est connecté à Discord!`);
});

bot.on('messageCreate', async message => {
    if (message.author.bot) return;

    const args = message.content.split(' ');
    const command = args[0].toLowerCase();

    if (command === '!citation') {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        message.reply(`" ${randomQuote.text} " - **__${randomQuote.author}__**`);
    }
});

bot.login(config.token);
