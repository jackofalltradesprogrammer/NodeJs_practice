var express = require('express');
var app = express(); // need to use a consturctor to make the app work

var jsonObj = require('./empSource');
var employees = jsonObj.employees;
console.log(employees);

app.get('/', function(req, resp){
    resp.send(employees);
});

app.get('/:id', function(req, resp){
    var id = req.params.id;
   
    var emp = employees.find(emp=>emp.id==id);
    resp.send(emp);
});

app.listen(9000, function(){
    console.log("Web API started listening");
});