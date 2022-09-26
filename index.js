var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World! V2');
  res.end();
}).listen(3000);