var fs = require('fs');
var mkdirp = require('mkdirp');
var express = require('express');
var router = express.Router();

var basePath = 'dist/results/';
mkdirp.sync(basePath);

router.get('/', function(request, response) {

    // get list of results
});

router.post('/', function(request, response) {


    var results = request.body;
    fs.writeFile(basePath + results.name + '.json', JSON.stringify(results), function(err){
        // todo: error handling...
        if(err) console.log(err);
        response.end();
    });
});

module.exports = router;
