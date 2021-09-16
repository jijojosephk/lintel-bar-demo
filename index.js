require('@electron/remote/main').initialize()
const { app, BrowserWindow } = require('electron');
const path = require('path');
/**
 * @type {BrowserWindow}
 */
let mainWindow;

function createMainWindow() {
	mainWindow = new BrowserWindow({
		frame: false,
		show: false,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		}
	});
	require('@electron/remote/main').enable(mainWindow.webContents);
	mainWindow.loadFile(path.join(__dirname, 'index.html')).then(() => {
		mainWindow.webContents.openDevTools();
	});
}

app.on('ready', createMainWindow);