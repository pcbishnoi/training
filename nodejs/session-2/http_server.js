var http = require("http");
http.createServer(function(request, response) {
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello World");
console.log('I am listening in every http request!');
response.end();
}).listen(3000);