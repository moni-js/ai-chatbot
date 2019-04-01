const { Command } = require('discord-akairo');
const request = require('request');

class DogImgCommand extends Command {
    constructor() {
        super('DogImg', {
           aliases: ['dogimage', 'dogpic', 'dogpics', 'dogimgs', 'dogimg'],
           category: 'fun',
           channel: 'guild',
           clientPermissions: ['SEND_MESSAGES'],
           description: {
               content: 'Doggi Pics',
               usage: '!dogimg',
               examples: ['dogimg']
               }
        });
    }

    exec(message) {
        request('https://random.dog/woof.json', { json: true }, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log("----------");
            console.log(body.url);
            return message.channel.send(body.url)
        });

    }
}

module.exports = DogImgCommand;