var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " recieved.");

    response.writeHead(200, { "Content-type": "text/plain" });
    var content = route(handle, pathname);
    console.log("content: " + content);
    response.write(content);
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.")
}

exports.start = start;
