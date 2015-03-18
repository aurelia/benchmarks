var express = require('express');
var directory = require('../fsutil/directory');
var router = express.Router();

router.get('/', function(request, response) {
    var microTests = directory.getChildren('/benchmarks/micro');
    var macroTests = directory.getChildren('/benchmarks/macro');

    response.json({
            micro : microTests,
            macro: macroTests
    });
});

module.exports = router;
