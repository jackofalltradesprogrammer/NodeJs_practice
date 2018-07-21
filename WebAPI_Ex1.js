var express = require('express');
var app = express(); // need to use a consturctor to make the app work

var mysql = require('mysql');
var query = "";

var cn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'happy',
    database: 'employeedb'
});  

app.get('/', function(req, resp){
    query = "SELECT * FROM tblEmployees";
    cn.query(query, function(err,data) {
        resp.send(data);
    });
});


app.get('/:id', function(req, resp){
    var id = req.params.id;
    query= "SELECT * FROM tblEmployees WHERE id=" + id;
    cn.query(query, function(err,data) {
    resp.send(data);
});
});

app.listen(9000, function(){
    console.log("Web API started listening");
});