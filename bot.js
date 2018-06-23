const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDU5ODI4MjE1MTg0MDk3Mjgw.Dg_1uw.Y_P-RVDu3RnxdsPXitRgUFLewis);
