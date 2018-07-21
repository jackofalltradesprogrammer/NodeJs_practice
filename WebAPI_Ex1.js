var express = require('express');
var app = express(); // need to use a consturctor to make the app work
// body-parser middleware which parses the body and sets req.body property.
var bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


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

app.post('/', function(req, resp){
    var e = req.body;
    query = "INSERT INTO tblemployees VALUES("+e.id+ ", '"+e.ename+"', '"+e.job+ "', "+e.salary+")";
    
    cn.query(query, function(err){
        if (!err){
            console.log("Row added successfully!");
            resp.send("Row added Successfully!");
        }
        else       
            resp.send("Not Successful!" + err);
    })
});

app.listen(9000, function(){
    console.log("Web API started listening");
});