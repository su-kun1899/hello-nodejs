var http = require("http");

http.createServer(function (request, response) {
  console.log("Request recieved.")
  response.writeHead(200, { "Content-type": "text/plain" });
  response.write("Hello, world!");
  response.end();
}).listen(8888)

console.log("Server has started.")
