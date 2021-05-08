const electron = require("electron");
const {
    app,
    BrowserWindow,
    globalShortcut,
    ipcMain
} = require("electron");
const httpServer = require("http-server");
const portfinder = require("portfinder");
const path = require("path");
const isDev = require("electron-is-dev");

portfinder.basePort = 9000; // default: 8000
portfinder.highestPort = 9999; // default: 65535

let mainWindow;

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        titleBarStyle: 'hidden',
        webPreferences: {
            javascript: true,
            plugins: true,
            nodeIntegration: true,
            webSecurity: false,
            preload: path.join(__dirname, "./public/preload.js"),
        },
    });
    mainWindow = win;

    // 通信
    // 健康度检测
    ipcMain.on("ping", (event, arg) => {
        event.returnValue = "pong";
    });

    globalShortcut.register('CommandOrControl+Shift+i', function () {
        isDev && win.webContents.openDevTools();
    });

    /* https://imweb.io/topic/5b13a663d4c96b9b1b4c4e9c */
    // ipcMain.on('synchronous-message', (event, arg) => {
    //     console.log(arg) // prints "ping"
    //     event.returnValue = 'pong';
    // });

    if (isDev) {
        win.webContents.openDevTools();
        win.loadURL("http://localhost:3000/index.html");
    } else {
        portfinder
            .getPortPromise()
            .then((PORT) => {
                httpServer
                    .createServer({
                        root: path.join(__dirname, "../app.build.runtime"),
                    })
                    .listen(PORT);
                return PORT;
            })
            .then((PORT) => {
                win.loadURL(`http://localhost:${PORT}/index.html`);
            });
    }

    // win.loadURL(
    //     isDev ?
    //     "http://localhost:3000" :
    //     `file://${path.join(__dirname, "../app.build.runtime/index.html")}`
    // );
}

app.whenReady().then(() => {
    createWindow();
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

module.exports = mainWindow;