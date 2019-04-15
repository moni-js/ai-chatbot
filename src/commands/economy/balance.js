const eco = require('discord-economy');
const { Command } = require('discord-akairo');

class BalanceCommand extends Command {
	constructor() {
		super('Balance', {
			aliases: ['balance'],
			category: 'economy',
			channel: 'guild',
			clientPermissions: ['SEND_MESSAGES'],
			description: {
				content: 'See how much money you have saved up :)',
				examples: ['@Moni#2030 balance']
			}
		});
	}

	async exec(message) {
		// eslint-disable-next-line new-cap
		let output = await eco.FetchBalance(message.author.id);
		return message.channel.send(`Yo ${message.author.tag}! My senses say you own ${output.balance} coins.`);
	}
}

module.exports = BalanceCommand;
