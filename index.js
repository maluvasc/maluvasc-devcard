const prettyjson = require('prettyjson');
let info = require("./info");

let options = {
    keysColor: 'rainbow',
    stringColor: 'magenta',
};

module.exports = () => prettyjson.render(info, options);
