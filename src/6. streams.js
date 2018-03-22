var fs = require('fs');

var readStream = fs.createReadStream(__dirname + "/module.js", 'utf-8');
var writeStream = fs.createWriteStream(__dirname + "/a.txt");


readStream.on('data', function(chunk){
    console.log("Chunk Received");
    writeStream.write(chunk);
});