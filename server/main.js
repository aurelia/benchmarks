var path = require("path");
var express = require("express");
var app = express();
var port = 8080;

app.get("/", function(request, response) {
    response.sendFile(path.resolve(__dirname + "/../dist/app/index.html"));
});

app.use(express.static(__dirname + "/../dist/"));
app.use(express.static(__dirname + "/../"));

app.listen(port, function(){
    console.log("Server listening on", port);
});
