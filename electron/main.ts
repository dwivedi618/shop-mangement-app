import { app, BrowserWindow, ipcMain} from "electron";
import * as path from 'path';
import { URL }  from 'url';
import * as fs from 'fs';
import * as express from 'express'
let win: BrowserWindow;

function createWindow(){
    const { screen } = require('electron')
    const primaryDisplay = screen.getPrimaryDisplay()
    const { width, height } = primaryDisplay.workAreaSize

    win = new BrowserWindow({width, height, icon: path.join(__dirname, `../../dist/shop-management-app/assets/images/Platonic_4_-_Bucky0002.png`)});
    let pathToIndexFile = path.join(__dirname, `/../../dist/shop-management-app/index.html`);
    let url = new URL(`file://${pathToIndexFile}`);
    console.log('src/assets/images/Platonic_4_-_Bucky0002.png');
    // win.loadURL(`http://localhost:3001/index.html`);
    win.loadURL(url.href);


    // win.webContents.openDevTools();

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

// let exApp = express();
// exApp.use(express.static(path.join(__dirname,`../../dist/shop-management-app/`)))
// exApp.listen(3001);

