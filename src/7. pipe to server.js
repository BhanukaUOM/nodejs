var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    var streamRead = fs.createReadStream(__dirname + "module.js", 'utf8');
    streamRead.pipe(res);
});

server.listen(3000, '127.0.0.1');