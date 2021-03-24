const electron = require("electron");
const {
    app,
    BrowserWindow,
} = require("electron");
const httpServer = require("http-server");
const portfinder = require("portfinder");
const path = require("path");
const isDev = require("electron-is-dev");

portfinder.basePort = 9000; // default: 8000
portfinder.highestPort = 9999; // default: 65535

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            // preload: path.join(__dirname, 'preload.js')
        },
    });

    if (isDev) {
        win.openDevTools();
        win.loadURL("http://localhost:3000/index.html");
    } else {
        portfinder.getPortPromise()
            .then(PORT => {
                httpServer.createServer({
                    root: path.join(__dirname, "../app.build.runtime")
                }).listen(PORT);
                return PORT;
            })
            .then(PORT => {
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
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})