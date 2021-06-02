# Groupchat-Electron-app
Application to chat with friends in real-time

# For Firecry Devs

Create a github account if you do not already have one

Install NodeJS 14.17.0 LTS (Leave everything default) https://nodejs.org/en/

Install Python 3.9.5 (Click the box next to `Add Python 3.9 to PATH`. Leave the rest default) https://www.python.org/downloads/

Install Git https://git-scm.com/downloads

Install VSCode https://code.visualstudio.com/

For UI people install the React Developer Tools Chrome extension: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

Once Everything is installed

## VSCode Setup

Run VSCode

Click the icon with the four boxes with one not touching the others. 

Look up and Install the following extensions:

Extensions

`*` = Required

`-` = Optional but Useful

(*) `Babel ES6/ES7`

(*) `Code Runner`

(*) If you use FireFox (-) If not `Debugger for Firefox`

(*) `ES7 React/Redux/GraphQL/React-Native snippets`

(*) `ESLint`

(*) `flask-snippets`

(*) `HTML CSS Support`

(*) `JavaScript (ES6) code snippets`

(*) `Live Share`

(*) `Material Icon Theme`

(*) `npm`

(*) `PostgreSQL`

(*) `Prettier - Code formatter`

(*) `Python`

(*) `Simple React Snippets`

(*) `SQLTools`

(*) `Thunder Client`

(*) `vscode-database`

(-) `Auto Close Tag`

(-) `Auto Reaname Tag`

(-) `Beautify`

(-) `Better Comments`

(-) `Bracket Pair Colorizer` or `Bracker Pair Colorizer 2` or Both

(-) `indent-rainbow`

(-) `Rainbow Brackets`

(-) `Terminal Status Bar`

(-) `Visual Studio IntelliCode`

(-) `vscode-styled-components`

(-) `vscode-styled-jsx`

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

## *Cloning Repo*

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

## *Dependencies to install from terminal*

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

Once done you can look up ways to customize VSCode

Here is a link to get you started: https://code.visualstudio.com/docs/introvideos/configure

To change the color of the bottom bar from blue install the Color Stamp extension 

Type: `ctrl-shift-p`, Type: `Color Stamp`, Select a color
