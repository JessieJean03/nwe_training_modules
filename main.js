const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

// Keep a global reference so the window isn't garbage collected
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 860,
    minWidth: 900,
    minHeight: 600,
    title: 'Interactive Training Modules',
    icon: path.join(__dirname, 'build', 'widget.ico'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      // Allow local file loading since the HTML is self-contained
      webSecurity: false,
    },
    show: false, // Don't show until ready to avoid flash
    backgroundColor: '#1a1a2e',
  });

  // Load the self-contained HTML
  mainWindow.loadFile('index.html');

  // Show once fully loaded to avoid white flash
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  // Open external links in the default browser, not Electron
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// App lifecycle
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  // On Windows/Linux, quit when all windows are closed
  if (process.platform !== 'darwin') app.quit();
});
