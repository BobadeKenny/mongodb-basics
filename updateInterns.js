var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
dba = db.db('mydb')
var collection = dba.collection("myMovies")
collection.updateOne(
	{movie: "The Banker"},
	{
		$set: {movie: "Hellboy", year: "2019", rating: 6}}, function(err, result){
	if (err) throw err;
	console.log("Document updated");
})
collection.findOne({movie: "Hellboy"}, function(err, result){
	if (err) throw err;
	console.log(result);
	})
})