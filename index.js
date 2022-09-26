var http = require('http');
var url = require("url")

const mapActions = {
 "GET": {
  "/users": (req, res) => {
    res.setHeader("Content-type", "application/json")
    res.write(JSON.stringify([
      {
        name: "John"
      }, 
      {
        name: "Mary"
      }
    ]));
    res.statusCode = 200;
    res.end();
  },
  "/products": (req, res) => {
    res.setHeader("Content-type", "application/json")
    res.write(JSON.stringify([
      {
        name: "Smartphone",
        price: 1000
      }, 
      {
        name: "SmartTv",
        price: 3000
      }
    ]));
    res.statusCode = 200;
    res.end();
  }
 },
}

http.createServer(function (req, res) {
  const urlParsed = url.parse(req.url)
  if (mapActions[req.method][urlParsed.path]) {
    return mapActions[req.method][urlParsed.path](req, res)
  } else {
    res.statusCode = 404;
    res.write("Not found route")
    res.end();
  }
  
}).listen(3000);