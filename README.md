Interactive Training Modules — Widget App
How to get your .exe installer
First time setup (5 minutes)
Step 1 — Create a new GitHub repository
Go to https://github.com/JessieJean03
Click the green New button (top left)
Name it: `widget-training-app`
Make sure it is set to Private
Click Create repository
Step 2 — Upload these files
On your new empty repository page, click uploading an existing file
Drag ALL of these files/folders into the upload area:
`main.js`
`package.json`
`index.html`
`build/` folder (drag the whole folder)
`.github/` folder (drag the whole folder — this is the important one)
Scroll down and click Commit changes
Step 3 — Watch it build
Click the Actions tab at the top of your repository
You should see Build Windows Installer running (yellow dot = in progress)
Wait about 3-5 minutes for it to finish (green checkmark = done)
Step 4 — Download your .exe
Click on the completed build (green checkmark)
Scroll down to the Artifacts section at the bottom
Click Training-Modules-Installer to download a zip
Unzip it — inside is your `Training-Modules-Setup-1.0.0.exe`
Share that `.exe` with your team — they just double-click to install
---
Updating the app content
Whenever you update the training content:
Go to your repository on GitHub
Click on `index.html`
Click the pencil icon (Edit)
Delete everything and paste your new HTML
Click Commit changes
GitHub automatically rebuilds — go to Actions tab and download the new `.exe` in a few minutes
---
Your team's experience
Double-click the `.exe`
Installs silently with no popups, no admin needed
Widget icon appears on their desktop and in Start Menu
Click it to open the app — no browser, no server, no setup
---
Files in this repo
```
widget-training-app/
├── .github/
│   └── workflows/
│       └── build.yml      ← Tells GitHub how to build the app
├── build/
│   ├── widget.ico         ← Widget app icon
│   └── icon.png           ← Widget app icon (PNG)
├── main.js                ← Electron window config
├── package.json           ← App settings
└── index.html             ← Your training app (replace this to update)
```
