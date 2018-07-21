var express = require('express');
var app = express(); // need to use a consturctor to make the app work

var fruits = ['Apple', 'Banana', 'Cherry', 'Grapes', 'Mango'];

app.get('/', function(req, resp){
    resp.send(fruits);
});

app.listen(9000, function(){
    console.log("Web API started listening");
});