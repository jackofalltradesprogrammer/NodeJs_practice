var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/KiranDB";
mongoClient.connect(url, function(err,db){
    var employeeCollection = db.collection("employees");

    var cursor = employeeCollection.find();
    cursor.each(function(err,doc){
        console.log(doc);
    });
});