import "reflect-metadata";
import * as path from 'path';
import { app, BrowserWindow, ipcMain, screen } from "electron";
import { createConnection, Connection, getConnection, Db } from "typeorm";
import { DbConfig } from './config/db.conf';
import { AppConfig } from './config/app.conf';
import { customer, product, inventory, sale, settings, user } from './db';

let win: BrowserWindow;
console.log(AppConfig.preloadPath);
/**
 * createWindow create a native window
 * when electron app will reday
 */
async function createWindow() {

    try {

        const connection = await createConnection({
            type: "mysql",
            host: DbConfig.host,
            port: 3306,
            username: DbConfig.user,
            database: DbConfig.database,
            password: DbConfig.password,
            entities: ["electron/dist/entities/*.js"],
            synchronize: true,
            logging: true
        });
    } catch (err) {
        console.log('Error from db:', err, 'this is config', DbConfig);
        app.quit();
        process.exit();
    }

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
ipcMain.handle('database', async (event, arg) => {
    try {

        const connection = getConnection();
        console.log(arg);
        const [item, action, data] = arg;
        switch (item) {
            case 'customer':
                return await customer(connection, action, data);

            case 'product':
                return await product(connection, action, data);

            case 'inventory':
                return await inventory(connection, action, data);

            case 'sale':
                return await sale(connection, action, data);
            case 'user':
                return await user(connection, action, data);

            case 'settings':
                return await settings(connection, action, data);
            default:
                console.log('This is the default option')
                return 'Invalid item name'
        }
    } catch (err) {
        console.log('Error in db handle:', err);
        return { state: 1 }
    }
});

// ipcMain.handle('insert', async (event, arg) => {
//     console.log(event, arg);
// });

// ipcMain.handle('update', async (event, arg) => {
//     console.log(event, arg);
// });

// ipcMain.handle('delete', async (event, arg) => {
//     console.log(event, arg);
// });