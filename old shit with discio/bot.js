var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
const jcore = require('./jcore');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true,
});

bot.setPresence({
    game: {
        name: "type *help for help"
    }
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `*`
    if (message.substring(0, 1) == '*') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);

        switch (cmd) {
            // !ping
            case 'jcore':
                console.log(args);
                string = args.join(" ");
                string = jcore.jcore(string);

                bot.sendMessage({
                    to: channelID,
                    message: string
                });
                break;
            // Just add any case commands if you want to..
            case 'check':
                userMention = args[0];
                if(args[0] == null){
                    console.log("this shit empty");
                    bot.sendMessage({
                        to: channelID,
                        message:"this shit empty"
                    });
                    break;

                }else if (args[0].length != 22) {
                    string = args.join(" ");
                    bot.sendMessage({
                        to: channelID,
                        message:string + " is not a valid user!"
                    });

                } else {
                    var number = Math.floor(Math.random() * 10);
                    bot.sendMessage({
                        to: channelID,
                        message: userMention + " is a " + number + "/10!"
                    });
                }
                break;
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message:"im not helping you"
                });
                break;

            case 'react':
                bot.getMessages({
                    channelID: channelID,
                },
                );
                break;
                //TODO
        }
    }
});