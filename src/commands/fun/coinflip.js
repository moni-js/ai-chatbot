const { Command } = require('discord-akairo');

class CoinFlipCommand extends Command {
	constructor() {
		super('CoinFlip', {
			aliases: ['coin', 'flipacoin', 'flipcoin', 'toss', 'cointoss', 'flip'],
			category: 'fun',
			channel: 'guild',
			clientPermissions: ['SEND_MESSAGES'],
			description: {
				content: '2 sided coin flip',
				examples: ['']
			}
		});
	}

	exec(message) {
		const coin = require('../../../random/coinflip.json');
		const randomCoin = coin[Math.floor(Math.random() * coin.length)];
		return message.util.reply(randomCoin);
	}
}

module.exports = CoinFlipCommand;
