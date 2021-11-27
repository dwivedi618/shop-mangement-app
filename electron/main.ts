import "reflect-metadata";
import { app, BrowserWindow, ipcMain, screen, Menu} from "electron";
import {createConnection, Connection, getConnection, Db } from "typeorm";
import { DbConfig }  from './config/db.conf';
import { AppConfig } from './config/app.conf';
import { customer, product, inventory, sell, settings, user, payment } from './db';
enum Status {
    FAILURE = 0,
    SUCCESS = 1
}

let win: BrowserWindow;
/**
 * createWindow create a native window
 * when electron app will reday
 */
async function createWindow() {

    try {

        const connection = await createConnection({
            type: "sqlite",
            // host: DbConfig.host,
            // port: 3306,
            // username: DbConfig.user,
            database: 'psm.sql',
            // password: DbConfig.password,
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
            nativeWindowOpen: false,
            preload: AppConfig.preloadPath
        },
        icon: AppConfig.iconPath
    });

    win.loadURL(AppConfig.indexURL);

    // if(process.env.NODE_ENV === 'development') win.webContents.openDevTools();
    // console.log('node ene',process.env.NODE_ENV);
    
    Menu.setApplicationMenu(null);
    win.maximize();

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
        const response = {
            status: Status.SUCCESS,
            data: null
        }
        const connection = getConnection();
        const [item, action, data] = arg;
        switch (item) {
            case 'customer':
                response.data = await customer(connection, action, data);
                break;
            case 'product':
                response.data = await product(connection, action, data);
                break;

            case 'inventory':
                response.data = await inventory(connection, action, data);
                break;

            case 'sell':
                response.data = await sell(connection, action, data);
                break;
            
            case 'payment':
                response.data = await payment(connection, action, data);
                break;
            
                
            case 'user':
                response.data = await user(connection, action, data);
                break;

            case 'settings':
                response.data = await settings(connection, action, data);
                break;
        }

        return response;
    } catch (err) {
        console.log('Error in db handler:', err);
        throw new Error(`Request could not be resolved.\n Error: ${err}`)
    }
});

//Creates the backup of database to download
ipcMain.handle('backup', async (event, arg) => {
    console.log(event, arg);
});

// ipcMain.handle('update', async (event, arg) => {
//     console.log(event, arg);
// });

// ipcMain.handle('delete', async (event, arg) => {
//     console.log(event, arg);
// });