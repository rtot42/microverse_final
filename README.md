# Running your microStudio game server

Preliminary step: you should have NodeJS installed on your server.

After unzipping the server export and changing directory to the folder containing this README:

* Run `npm install`
* Edit `config.json` to set the desired port for your game server
* Run `npm run start` to start your game server

You can test your server by running your game locally. You should set the address of your own server
when creating a new ServerConnection from the client, example: `connection = new ServerConnection('ws://127.0.0.1:3000')`."# microverse_final" 
