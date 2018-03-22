/* fs module  */
var fs = require('fs');


//Sync: blocking Code
var modules = fs.readFileSync("module.js", "utf8");
console.log(modules);

fs.writeFileSync("a.txt", "Write as Sync");

//ASync: Multiple requests
fs.readFile("module.js", 'utf8', function(err, data){
    console.log(data);
});

fs.writeFile("a.txt", "Write as Async");