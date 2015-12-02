var express = require('express');
var port = process.env.PORT || 3001;
var app = express();
var http = require('http').Server(app);


app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res){
  res.sendFile('app');
});
app.get('/maybe', function(req, res){
  res.send('<p>what am I even doing</p>');
});

http.listen(port);
console.log('WE ARE RUNNING ON PORT ' + port);
