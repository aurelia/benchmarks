var fs = require('fs');

var getChildren = function(directory) {
    var base = __dirname + "/../.." + directory;
    return fs.readdirSync(base).filter(function(file) {
        return fs.statSync(base + '/' + file).isDirectory();
    });
};

module.exports = {
    getChildren: getChildren
};
