var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use('/id', function(req, res, next){
    console.log(req.url);
    next(); // run next codes eg: var object = {'name' : 'name', 'age' : [23,24,25,26,10]}; res.render('person', {id : req.params.id, obj : object});
});

app.get('/', function(req, res){
    res.send("Home Page");
});

app.get('/admin', function(req, res){
    res.sendFile(__dirname + "/module.js");
});

app.get('/id/:id', function(req, res){
    var object = {'name' : 'name', 'age' : [23,24,25,26,10]};
    res.render('person', {id : req.params.id, obj : object});
});

app.listen(3000);