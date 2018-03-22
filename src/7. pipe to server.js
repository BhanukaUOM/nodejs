var fs = require('fs');
var http = require('http');

/* Text, HTML

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/plain'});  //text/html for HTML Files
    var streamRead = fs.createReadStream(__dirname + "module.js", 'utf8'); //module.html fot HTML Files
    streamRead.pipe(res);
});
*/


/* JSON */
var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'application/json'});
    var obj = {
        name: "BMCSoft",
        address: "LK"
    };
    res.end(JSON.stringify(obj));
});

server.listen(3000, '127.0.0.1');