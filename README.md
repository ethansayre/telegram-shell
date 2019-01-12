# Telegram Shell

A simple implementation of the node-cmd library in conjunction with the Telegram API that allows for remote shell access through a secured conversation.

## Getting Started

The following guide will help you get a copy of the project up and running on your local machine for development and testing purposes.  
  
**PLEASE NOTE THAT THIS IS VERY MUCH A WORK AND PROGRESS! YOU SHOULD NOT USE THIS CODE ON PRODUCTION MACHINES, OR ON ANY MACHINE WITH DATA YOU CARE ABOUT! THERE ARE NO GUARANTEES TO SECURITY WHEN USING THIS PLATFORM!**

Ideal use cases:  
* Raspberry Pis (when you want an SSH like client without port-forwarding as Telegram can be used anywhere with an internet connection)  
* Home media centers (when you want to transfer files on the go)  
* Docker or VM instances (again, ONLY USE THIS IF YOU DON'T CARE ABOUT THE FILES ON YOUR INSTANCE!)  

### Downloading
Download the files of this repository through git or move your cursor to the "download as ZIP" option in the top right. Unzip or move the files to an empty folder.

### Prerequisites

The script uses two key libraries:
node-telegram-bot-api and node-cmd.  
Navigate to the empty folder created in the Downloading step in your terminal window before continuing.  
Run the following commands in the empty folder to install all dependencies:

```
npm i node-telegram-bot-api
```
```
npm i node-cmd
```

Once this is done, open index.js in your favorite code editor. Edit the following lines with your token from BotFather and userId.  
See [here to create a bot token](https://core.telegram.org/bots#6-botfather). If you need to find your userId, just start the script without it and send any message to the bot. Check your console's output, you should see something along the lines of "hello from 123456789". What follows the 'from ' is your user ID.
```
const token = ''; //REPLACE YOUR TOKEN HERE!
const userId = 1; //REPLACE YOUR USERID HERE!
```  
  
The token should be a string, the user ID should be an integer. See below for an example:  
```
const token = '110201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw'; //REPLACE YOUR TOKEN HERE
const userId = 123456789; //REPLACE YOUR USERID HERE!
```

## To run:
Simply type ``node index.js``.  
Any logged contents will appear in your console.

## Built With

* [Node.js](https://nodejs.org/) - The JS framework used

## Contributing

Feel free to contribute as you wish. Open pull requests when needed :)

## Authors

* **Ethan Sayre** - *Initial work* - [ethansayre](https://github.com/ethansayre)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
