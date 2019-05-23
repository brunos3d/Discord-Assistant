# Discord-Assistant

### INSTALLING THE PROJECT

Just clone or download the project, open your favorite Command Prompt and enter the command below:

	npm i

### CREATING OUR BOT

You will need to have / create an application in Discord, the process is very fast (*I was impressed by the ease of integration of the tool myself*).

1. To create the application between [this link] (https://discordapp.com/developers/applications/).
2. Click the "New Application" button that appears in the right corner of your screen.
3. Give a name to your application, in my case I chose "BlaBlaBot2.0".
4. In the left corner of the screen, click the "Bot" tab.
5. Click the "Add Bot" button and then confirm by clicking the "Yes, do it!" Button.

For the next step it is important that you have already created the server in the Discord where the Bot will act.

We will add the Bot to the server, for this, after creating the Bot:

6. In the left corner of the screen, click the "General information" tab.
7. Copy the "Client ID" and add in the place where "YOURBOTID" is written in the following link


	https://discordapp.com/oauth2/authorize?&client_id=YOURBOTID&scope=bot&permissions=8


9. Paste the link into a new tab and hit enter.

We will add the Bot to a server now:

10. Choose the desired server in the "Select a server" field.
11. Click "Authorize" to take action and then confirm Captcha.

### PROGRAMMING OUR BOT!

Basically you'll need the name of your **text channel**, name of your **voice channel**, your user's tag and **TOKEN's Bot**.
The TOKEN you can pick up the same place where you created the application and the Bot for your Discord, the names of the servers and your user tag you can find in the general interface of the Discord just by clicking the dirento button on top of the server and copy the ID.

Just open the `index.js` script and put your information in there.

### MAKING IT WORK!

After completing everything, just open the `init.bat` file and enter some commands into your Discord text channel like

```cs
!run msg.reply ('Hello World')
```
