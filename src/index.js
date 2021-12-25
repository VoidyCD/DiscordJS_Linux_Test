const {Client, Intents} = require("discord.js")
const dotenv = require("dotenv").config()
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]})
const token = require("../Token.json")
const fs = require("fs")
const prefix = "M-"

// THIS IS A TEMPLATE


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  console.log(msg.content)
  if (msg.content == '<@!810638163831029770>') {

    msg.reply("I am a test for Voidy. This is not a operational bot.")
  }
  else if (msg.content == `${prefix}end`) {
    msg.reply("Turning Off...")
    end()
  }
})

function end() {
  setTimeout(function(){ 

    nonexit + nonexit
}, 2000);  
}



// Logging Messages and saving them:

// DO NOT USE THIS FOR SPYING OR YOU ARE GAY

client.on('message', msg => {
  
  const finish = (error) => {
    if(error){
      console.log(error)
      return;
    }
  }

  let data = JSON.stringify(msg)

  

  fs.writeFile('loggedTexts.json',data,finish)
})






client.login(token.token)