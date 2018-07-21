var express = require('express');
var app = express(); // need to use a consturctor to make the app work

var names = ['Suhil', 'Pavan', 'Ricky', 'Ujwal ', 'Happy'];

app.get('/', function(req, resp){
    resp.send(names);
});

app.get('/:name', function(req, resp){
    var name = req.params.name;
    var flag=false;
    for (let i = 0; i < names.length; i++) {
        if (names[i] == name) {
            flag=true;
            break
        }
        
    }
    var msg='';
    if (flag) msg=name+=' got selected';
    else msg='namge got rejected';
    resp.send(msg);
});

app.listen(9000, function(){
    console.log("Web API started listening");
});