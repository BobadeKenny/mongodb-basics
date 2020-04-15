var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
dba = db.db('mydb')
var collection = dba.collection("myMovies")

function findResults(collection){
	collection.findOne({}, function(err, result){
	if (err) throw err;
	console.log("First document in the collection:");
	console.log(result);
})

collection.find({rating: 7}).toArray(function(err, result){
	if (err) throw err;
	console.log("All movies with a rating of 7:");
	console.log(result);
})
collection.find({}, { projection: { _id: 0, movie: 1} }).toArray(function(err, result){
	if (err) throw err;
	console.log("All movie titles:");
	console.log(result);
})
}
findResults(collection)
})