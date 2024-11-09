const { app, BrowserWindow } = require('electron');

// loads index.html into new BrowserWIndow Instance
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('index.html'); 
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
