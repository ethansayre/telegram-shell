const TelegramBot = require('node-telegram-bot-api');
var cmd = require('node-cmd');
var currentdirectory = "~";

// replace the value below with the Telegram token you receive from @BotFather
const token = ''; //REPLACE YOUR TOKEN HERE!
const userId = 1; //REPLACE YOUR USERID HERE!

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Listens for any message.
bot.on('message', (message) => {
	console.log(content + "from " + message.from.id); //logs the text. This statement is not necessary, but nice for debugging purposes.
	
	if (message.from.id != userId) return; //returns if the message that was sent to the bot does not match the allowed userId.
	//The above statement prevents others from accessing your machine. MAKE SURE YOU TYPE THE RIGHT USERID ON LINE 7! :)
  const chatId = message.chat.id; //sets the chatId, or the conversation's unique identifier
  var content = message.text; //sets a variable with the contents of the text of the message. This allows us to use .startsWith

	if (content.startsWith("cd ")){ //due to the nature of the library, new commands called with cmd.get will be run in the project directory.
		//To alleviate this problem, if the command starts with 'cd' we will change the current directory variable to the specified directory.

		cmd.get(
        `cd ${currentdirectory}
        ${content}
				pwd`, //The 3 line breaks tell the library to run all commands in conjunction with another. We first cd to the current directory because
				//of the issue mentioned on line 20.
        function(err, data, stderr){
        	bot.sendMessage(chatId, "Response:\n" + data); //sends the response recieved from the console.
					currentdirectory = data; //This sets our current directory variable to the result of 'pwd'
        }
		);
		return; //prevents the next cmd.get from running if the user was changing directories.
	}

		cmd.get(
    `cd ${currentdirectory}
    ${content}`, //Runs the command in conjunction with the cd (variable) command to start the user's input in the correct directory
    function(err, data, stderr){
		bot.sendMessage(chatId, "Response:\n" + data); //Returns the response from the cmd library to the user
    }
	);


});