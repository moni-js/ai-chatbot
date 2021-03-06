const { Command } = require('discord-akairo');

class FortuneCommand extends Command {
	constructor() {
		super('Fortune', {
			aliases: ['fortune'],
			category: 'fun',
			channel: 'guild',
			clientPermissions: ['SEND_MESSAGES'],
			description: {
				content: 'See ur Fortune',
				examples: ['']
			}
		});
	}

	exec(message) {
		const fortunes = require('../../../random/fortune.json');
		const Randomfortune = fortunes[Math.floor(Math.random() * fortunes.length)];
		return message.util.send(Randomfortune);
	}
}

module.exports = FortuneCommand;
