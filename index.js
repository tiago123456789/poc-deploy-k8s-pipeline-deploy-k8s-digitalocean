var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World! Application updated V3');
  res.end();
}).listen(3000);