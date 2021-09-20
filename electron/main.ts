import { app, BrowserWindow, ipcMain, screen} from "electron";
import AppConfig from 'config/app.config';
import execute from './db';

let win: BrowserWindow;

/**
 * createWindow create a native window
 * when electron app will reday
 */
function createWindow(){

    //Getting the screen area of the display
    const { width, height } = screen.getPrimaryDisplay().workAreaSize

    win = new BrowserWindow({
        width, 
        height,
        webPreferences: {
            preload: AppConfig.preloadPath
        },
        icon: AppConfig.iconPath
    });

    win.loadURL(AppConfig.indexURL);


    win.webContents.openDevTools();

    win.on("closed", () => {
        win = null;
    });
}


app.on("ready", createWindow);

app.on("activate", () => {
    if (win === null) {
        createWindow();
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});




/**
 * Handle requests on renderer invocation
 */
ipcMain.handle('fetch', async (event, arg) => {
    console.log(event, arg);
    let query = `SELECT * FROM products;`
    let data = []
    let res = await execute(query);
    return res;
});

ipcMain.handle('insert', async (event, arg) => {
    console.log(event, arg);
});

ipcMain.handle('update', async (event, arg) => {
    console.log(event, arg);
});

ipcMain.handle('delete', async (event, arg) => {
    console.log(event, arg);
});





