const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;

  function createWindow () {
    mainWindow = new BrowserWindow({width: 900, height: 680});
    mainWindow.loadURL('http://localhost:3000');
    mainWindow.on('closed', () => mainWindow = null);
  }

  app.on('ready', createWindow)  