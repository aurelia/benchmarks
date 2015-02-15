var express = require("express");
var router = express.Router();

router.get("/", function(request, response) {
    response.redirect("/dist/app/index.html");
});

router.use(express.static(__dirname + "/../../"));

module.exports = router;
