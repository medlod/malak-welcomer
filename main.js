const Discord = require('discord.js');
const bot = new Discord.Client();
const t = require('timers')
const client = new Discord.Client;
const timers = require('timers')
const config = require('./data/config.json')

let activities = [
  {
    name:"MALAK'S KINGDOM!",
    options:{
      type:"WATCHING"
    }
  },
  {
    name:"MALAK'S KINGDOM!",
    options:{
      type:"WATCHING"
    }
  },
  {
    name:"MALAK'S KINGDOM!",
    options:{
      type:"WATCHING"
    }
  }
]
let i = 0;
bot.on('ready', () => {
    console.log("Turning On Bot")
    console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
    timers.setInterval(() => {
      i = i == activities.length ? 0 : i
      bot.user.setActivity(activities[i].name, activities[i].options)
      i++
    }, 15000)
});

bot.on('guildMemberAdd', member => {
  let count = member.guild.memberCount.toString() 
  let end = count[count.length-1]
  let suffixed = end == 1 ? count + "st" : end == 2 ? count + "nd" : end == 3 ? count + "rd" : count + "th" 
  const channel = member.guild.channels.find(chnl => chnl.name === 'welcome');
  const memberavatar = member.user.displayAvatarURL
      if (!channel) {
        console.log("Channel Not found.");
        return;
      };
      
      let str = `Salam **${member.user.username}** Merba bik f **${member.guild}** ` //wrong id?
      const embed = new Discord.RichEmbed()
      .setAuthor(member.user.tag, memberavatar)
      .setColor('363A3F')
      .setDescription(str)
      .setThumbnail(memberavatar) // using member.user.displayAvatarURL
      .setTimestamp();
      channel.send(embed);
  
  console.log(`${member}`, "has joined" + `${member.guild.name}`)
});

bot.login(config.token)
