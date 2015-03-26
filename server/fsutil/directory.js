var fs = require('fs');
var mkdirp = require('mkdirp');

var getChildren = function(directory) {
    var base = __dirname + "/../.." + directory;
    return fs.readdirSync(base).filter(function(file) {
        return fs.statSync(base + '/' + file).isDirectory();
    });
};

var getFileNames = function(directory) {
    return fs.readdirSync(directory);
};

var make = function(path) {
    mkdirp.sync(path);
};

var writeFile = function(path, contents) {
    fs.writeFileSync(path, contents);
};

module.exports = {
    getChildren: getChildren,
    make: make,
    writeFile: writeFile,
    getFileNames: getFileNames
};
