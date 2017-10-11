var express = require('express');
var app = express();
var path = require('path');

app.use("/static", express.static(__dirname + '/static'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

var port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at ", port);