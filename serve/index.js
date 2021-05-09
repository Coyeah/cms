const portfinder = require("portfinder");

portfinder.basePort = 9000; // default: 8000
portfinder.highestPort = 9999; // default: 65535

module.exports = function (params = {}) {
    const { win } = params;

    portfinder.getPortPromise()
        .then(PORT => {

            return PORT;
        })
        .then(PORT => {
            win.loadURL(`http://localhost:${PORT}/index.html`);
        });
}
