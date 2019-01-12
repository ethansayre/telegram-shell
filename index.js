const TelegramBot = require('node-telegram-bot-api');
var cmd = require('node-cmd');
var currentdirectory = "~";

// replace the value below with the Telegram token you receive from @BotFather
const token = ''; //REPLACE YOUR TOKEN HERE!

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (message) => {
	if (message.from.id != "REPLACE YOUR USER ID HERE!!") return;
  const chatId = message.chat.id;
  var content = message.text;
	console.log(content);

	if (content.startsWith("cd ")){

		cmd.get(
        `cd ${currentdirectory}
        ${content}
        pwd`,
        function(err, data, stderr){
        	bot.sendMessage(chatId, "Response:\n" + data);
			currentdirectory = data;
        }
		);
		return;
	}

		cmd.get(
    `cd ${currentdirectory}
    ${content}`,
    function(err, data, stderr){
		bot.sendMessage(chatId, "Response:\n" + data);
    }
	);


});