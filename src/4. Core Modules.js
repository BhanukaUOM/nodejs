/* fs module  */
var fs = require('fs');

// Read Write File
//Sync: blocking Code
var modules = fs.readFileSync("module.js", "utf8");
console.log(modules);

fs.writeFileSync("a.txt", "Write as Sync");

//ASync: Multiple requests
fs.readFile("module.js", 'utf8', function(err, data){
    console.log(data);
    fs.writeFile("a.txt", "Write as Async", function(){});
});

//Delete File
fs.unlink('a.txt');  //if file not exists get error


// Make Remove Directory Sync: block code
fs.mkdirSync("abc");  
fs.rmdirSync("abc");

// Make Remove Directory Async
fs.mkdir("abc", function(){
    fs.readFile("module.js", 'utf8', function(err, data){
        fs.writeFile('./abc/a.txt', data, function(){
            fs.unlink('./abc/a.txt');
            fs.rmdir("abc");  //can't remove non Empty Directives    
        });
    });
});  