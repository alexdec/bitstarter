var fs = require('fs');
var buf = fs.readFileSync('index.html');
var msg = buf.toString();

console.log(msg);
