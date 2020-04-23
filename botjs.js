const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const jcore = require('./jcore');
const sia = require('./sia');
const villagersearch = require('./villagersearch')



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'args-info') {
    if (!args.length) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
  
    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
  } else if (command === 'jcore') {
    console.log(args);
    string = args.join(" ");
    string = jcore.jcore(string);
    return message.channel.send(string);
  }
  else if (command === 'sia') {
    console.log(args);
    string = args.join(" ");
    string = sia.sia(string);
    return message.channel.send(string);
  }
  else if (command === 'vsearch') {
    console.log(args);
    string = args.join(" ");
    string = villagersearch.search(string);
    return message.channel.send(string);
  }
  else if (command === 'test') {
    console.log(args);
    string = args.join(" ");
    output = villagersearch.search(string); //runs the villager search fn and puts it in the embed
    const embed = {
        "title": output[0],
        "url": "https://villagerdb.com/villager/ace",
        "color": 5365554,
        "image": {
          "url": "https://villagerdb.com/images/villagers/full/ace.a236f61.png"
        },
        "thumbnail": {
        "url": "https://cdn130.picsart.com/293485846030211.png?type=webp&to=min&r=640"
        },
        "fields": [
          {
            "name": "Species",
            "value": output[1]
          },
          {
            "name": "Personality",
            "value": output[2]
          },
          {
            "name": "Phrase",
            "value": output[3]
          },
          {
            "name": "Gender",
            "value": output[4],
            "inline": true
          },
          {
            "name": "Birthday",
            "value": output[5],
            "inline": true
          },
        ]
    }
    message.channel.send({ embed });
  };
});

client.login(token);