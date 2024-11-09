const { app, BrowserWindow, Menu } = require('electron');
const path = require('path'); // handling paths
const { SlippiGame } = require("@slippi/slippi-js");

//auto reload ability for changes made, makes frontend much easier 
require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

// loads index.html into new BrowserWIndow Instance
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        icon: path.join(__dirname, 'public', 'smashlens-logo-final.png') // Use path.join for icon path

    });
    win.loadFile('src/index.html');

    // Remove electron's top menu
    Menu.setApplicationMenu(null);
}

//Opens window
app.whenReady().then(createWindow);

//to quit app when all windows are closed 
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

// opening and closing for MacOs
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
