const Telegram = require("node-telegram-bot-api");
const TelegramBot = require("node-telegram-bot-api/lib/telegram");
const ExplorerController = require("./controllers/ExplorerController")

require('dotenv').config()

// Token receive from @BotFather
const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot =  new TelegramBot(token,  {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+) | node/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text cotent
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the capture "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.

bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = parseInt(msg.text);
    
    const missionToApplyFb = msg.text;

    if(!isNaN(numberToApplyFb)){
        const fizzbuzzTrick = ExplorerController.applyFizzbuzz(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validacion: ${fizzbuzzTrick}`;
        bot.sendMessage(chatId, responseBot);    
    }       
    else if((missionToApplyFb === "node" || missionToApplyFb === "java")){
        const responseBot = ExplorerController.getExplorersUsernamesByMission(missionToApplyFb);
        let missionsExplorers = new Array(responseBot).toLocaleString();
        missionsExplorers = String(missionsExplorers).replaceAll(',', ', ')  
        const response = `Mision: ${missionToApplyFb}: Explorers: ${missionsExplorers}`
        bot.sendMessage(chatId, response);
    
    }else {
        bot.sendMessage(chatId, "Envia un número valido o una cadena valida");
    }     
}) 

// Message to node
/*bot.on("message", (msg) => {
    const node = "node";
    if(msg.text.toString().toLowerCase().indexOf(node)===0){
        bot.sendMessage(msg.chat.id, ExplorerController.getExplorersUsernamesByMission(node))
    } else {
        bot.sendMessage(msg.chat.id, "Envia una cadena valida");
    }
}) */



