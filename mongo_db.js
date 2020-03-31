var mongo = require('mongodb')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/kenny_bobade";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
console.log("Database created by Kenny Bobade.");
db.close();
});