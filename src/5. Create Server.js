var http = require('http');

var server = http.createServer(function(req, res){
    console.log("Request Made from: " + req.url);
    res.writeHead(200, {'Content_Type' : 'text/plain'});
    res.end("Hello!!");
});

server.listen(3000, '127.0.0.1');