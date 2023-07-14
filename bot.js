
require("dotenv").config();

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] 
});

client.on('ready', () => {
    console.log("bot is alive");
});

client.on('messageCreate', msg => {
    
    var arr=["sad","unhappy","low"];
    var input=String(msg.content);
    var inputarr=input.split(/\s+/);
    const mp={};
   

    for(let i=0;i<inputarr.length;i++){
         mp[inputarr[i]]=1;
    }
    
    for(let i=0;i<arr.length;i++){

        if(mp[arr[i]]){
            msg.reply("Take care of yourself and remember that things can get better.");
            return;
        }
    }
});

client.login(process.env.BOT_TOKEN);