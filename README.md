# Groupchat-Electron-app
Application to chat with friends in real-time

*For Firecry Devs*

Create a github account if you do not already have one

Install NodeJS 14.17.0 LTS (Leave everything default) https://nodejs.org/en/

Install Python 3.9.5 (Click the box next to `Add Python 3.9 to PATH`. Leave the rest default) https://www.python.org/downloads/

Install Git https://git-scm.com/downloads

Install VSCode https://code.visualstudio.com/

Once Everything is installed

*VSCode Setup*

Run VSCode

Create a folder (This folder will be where you will have your local repo)

Open that folder in VSCode

Create a file 

Type: `print('Hello World')`

Save the file, Name it: `Hello World.py`

Run the file: Hopefully you see Hello World in the terminal at the bottom.

If not contact someone on the team that got it working.

Type: `ctrl-shift-p` Type & Select: `Terminal: Select Default Profile` Select: `Git Bash`

Type: `ctrl-shift-p` Type & Select: `Open in Terminal` 

If the box to the right of the terminal box says bash you are good to go on. 

If not click the + button to the right of the terminal hopefully it says bash now.

*Cloning Repo*

Open terminal

Change directory to `~/name-of-folder-you-made` 

Need help changing directory ask for help here is the command (`cd name-of-directory-to-change-to`)

Make sure your terminal says the path to the folder you made.

Open `https://github.com/SSCHUKRAFT/Groupchat-Website` in a browser.

Click the green button that says `Code`.

Click the clipboard button next to the long url

Type: `git clone ` with a space after `clone`

Paste that link after the space after `clone`

Hit enter.

You may be asked to authorize your github account or signin to it.

*Dependencies to install from terminal*

Open terminal 

Change directory to `~/name-of-folder-you-made/Groupchat-Website/firecry-chatapp`

Type these commands in the terminal: 

If it says npm is not a command close VSCode and rerun it.

`npm add electron`

`npm install --save bootstrap`

`npm install --save reactstrap react react-dom`

`npm i react-router-dom --save`

`npm run electron-react` 

Two of the same UI should show up one in a Browser tab and the other a desktop window.

Play around with the links

`npm run electron-react` will be the main command used to run the server to run the application. 

All changes saved in will show in real time on the two UI as long as the server is still running.

To close the server click `ctrl-c`