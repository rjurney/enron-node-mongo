// Dependencies
var mongodb = require("mongodb"),
    http = require('http'),
    url = require('url');

// Set up Mongo
var Db = mongodb.Db,
    Server = mongodb.Server;

// Connect to the MongoDB 'enron' database and its 'emails' collection
var db = new Db("enron", new Server("127.0.0.1", 27017, {}));
db.open(function(err, n_db) { db = n_db });
var collection = db.collection("emails");

// Setup a simple API server returning JSON
http.createServer(function (req, res) {
  var inUrl = url.parse(req.url, true);
  var messageId = inUrl.query.messageId;
  
  collection.findOne({message_id: messageId}, function(err, item) {
    if(err) {
      console.log("Error:" + err);
      res.writeHead(404);
      res.end();
    }
    if(item) {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(item), null, 4);
    }
  });

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');