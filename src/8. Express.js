var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Home Page");
});

app.get('/admin', function(req, res){
    res.send("Administrator Page");
});

app.listen(3000);