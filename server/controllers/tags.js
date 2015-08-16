var express = require('express');
var router = express.Router();
var directory = require('../fsutil/directory');
var basePath = 'dist/tags/';

router.get('/', function(request, response) {
  var name = 'tags.json';
  var options = {
    headers: { "Content-Type": "json" },
    root: __dirname + "/../../" + basePath
  };
  response.sendFile(name, options);
});

router.post('/', function(request, response) {
  var name = 'tags.json';
  var results = request.body;
  directory.make(basePath);
  directory.writeFile(basePath + name, JSON.stringify(results, null, 2));
  response.end();
});

module.exports = router;
