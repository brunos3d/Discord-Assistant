const { Client, RichEmbed, Game } = require('discord.js');
const client = new Client();

const txt_channel = 'bot-chat'; // The name of the text channel
const voice_channel = 'bot-call'; // The name of the voice channel
const super_user = 'USER#TAG'; // Your special user tag like that "Bruno Silva#1551"

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.author.username != client.user.username) {
		let args = msg.content.split(' ');
		switch (args[0].toLowerCase()) {
			case '!run':
				const command = msg.content.replace(args[0], '');
				try {
					eval(command);
				}
				catch (ex) {
					const embed = new RichEmbed()
						.setTitle(`Error: "${command}"`)
						.setColor(0xFF0000)
						.setDescription(ex.message);
					msg.channel.send(embed);
				}
				break;

		}

		if (msg.isMemberMentioned) {
			const user = msg.mentions.users.first();
			msg.channel.send(`${user}: ${user.presence}!`);
		}
	}
});

function say(message) {
	sayOn(txt_channel, message);
}

function sayOnID(channelID, message) {
	getChannelByID(channelID).send(message);
}

function sayOn(channel, message) {
	getChannelByName(channel).send(message);
}

function getChannelByID(id) {
	return client.channels.find(channel => channel.id == id);
}

function getChannelByName(name) {
	return client.channels.find(channel => channel.name == name);
}

function getVoiceChannelByName(name) {
	return client.voiceConnections.find(channel => channel.channel.name == name);
}

client.login('BOT-TOKEN'); // Your Discord application token to login with your BOT 
