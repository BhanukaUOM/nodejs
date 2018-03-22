var fs = require('fs');
var http = require('http');

/* Text, HTML

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/plain'});  //text/html for HTML Files
    var streamRead = fs.createReadStream(__dirname + "module.js", 'utf8'); //module.html fot HTML Files
    streamRead.pipe(res);
});
*/


/* JSON 
var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'application/json'});
    var obj = {
        name: "BMCSoft",
        address: "LK"
    };
    res.end(JSON.stringify(obj));
});
*/


/* routing */
var server = http.createServer(function(req, res){
    var url = req.url;
    if(url === '/home' || url == '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        var readStream = fs.createReadStream('./module.js').pipe(res);
    } else if(url === '/contact'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        var readStream = fs.createReadStream('./3. modules.js').pipe(res);
    } else {
        res.writeHead(404, {'Content-Type' : 'text/html'});
        res.end("Not Found! 404");
    }
});
server.listen(3000, '127.0.0.1');