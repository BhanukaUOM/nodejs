var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Home Page");
});

app.get('/admin', function(req, res){
    res.send("Administrator Page");
});

app.get('/id/:id', function(req, res){
    res.send(`ID is: ${req.params.id}`);
});

app.listen(3000);