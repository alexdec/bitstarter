var express = require('express');

var app = express.createServer(express.logger());

var msg = fs.readFileSync('index.html','utf8');
console.log(msg);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
