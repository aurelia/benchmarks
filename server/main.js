var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json())
app.use(require('./controllers/static.js'));
app.use('/api/tests', require('./controllers/tests.js'));
app.use('/api/results', require('./controllers/results.js'));

var port = 8080;
app.listen(port, function(){
    console.log('Server listening on', port);
});
