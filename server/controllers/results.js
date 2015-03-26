var express = require('express');
var router = express.Router();
var directory = require('../fsutil/directory');
var basePath = 'dist/results/';

router.get('/', function(request, response) {

    var results = directory.getFileNames(basePath);
    response.json({
        results: results
    });

});

router.get('/:name', function(request, response) {
    var name = request.params.name;
    var options = {
        headers: { "Content-Type": "json" },
        root: __dirname + "/../../" + basePath
    };
    response.sendFile(name, options);
});

router.post('/', function(request, response) {

    var results = request.body;
    directory.make(basePath);
    directory.writeFile(basePath + results.name + '.json', JSON.stringify(results));
    response.end();

});

module.exports = router;
