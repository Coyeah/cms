const {
    app,
    BrowserWindow,
    globalShortcut,
    ipcMain
} = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
    const win = new BrowserWindow({
        width: isDev ? 1300 : 800,
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

    if (isDev) {
        win.webContents.openDevTools();
        win.loadURL("http://localhost:3000/index.html");
    } else {
        require("./serve/index")({
            win,
        });
    }
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