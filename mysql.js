var mysql = require('mysql');
var cs = {
    host:'localhost',
    user:'root',
    password:'happy',
    database:'EmployeeDB'
};
var cn = mysql.createConnection(cs);

var query="DELETE FROM tblemployees  WHERE id=5";

cn.connect(function (err)  {
  if (err) throw err;
  console.log("Connected!");
  cn.query(query, function (err, result){
    if (err) throw err;
    console.log(result.affectedRows + " number of records got deleted");
  });
});

// cn.end();