// Connect to the MongoDB 'enron' database and its 'emails' collection
require("mongodb");
var Db = require("mongodb").Db,
    Server = require("mongodb").Server;
var db = new Db("enron", new Server("127.0.0.1", 27017, {}));
db.open(function(err, n_db) { db = n_db });
var collection = db.collection("emails");

// Setup a simple API server returning JSON
var http = require('http');
http.createServer(function (req, res) {
  var inUrl = require('url').parse(req.url, true);
  var messageId = inUrl.query.messageId;
  
  collection.findOne({message_id: messageId}, function(err, item) {
    if(err) {
      console.log("Error:" + err);
    }
    if(item) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(JSON.stringify(item));
    }
  });

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');