const path = require("path");

const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);

module.exports = {
    webpack: {
        alias: {
            src: pathResolve("./src"),
        },
    },
};