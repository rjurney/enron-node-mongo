enron-node-mongo
================

A Hortonworks example project for building a simple Node application with Pig, MongoDB, Node.js and the Enron Emails.

The Enron Emails
----------------
An archive of emails from the Enron investigation are available for download on S3 in Avro format [https://s3.amazonaws.com/rjurney.public/enron.avro].

Installing Pig 0.10
-------------------
You'll need the lastest version of Apache Pig, version 0.10, to use Avro. You can get it here: [http://www.apache.org/dyn/closer.cgi/pig]

Installing MongoDB
------------------
MongoDB is available for download here: [http://www.mongodb.org/downloads]. The Java driver for MongoDB (which we'll need to connect to it via Pig) is available here: [https://github.com/mongodb/mongo-java-driver/downloads].

Installing Node.js
------------------
Node.js is available here: [http://nodejs.org/].

Connect Node to Mongo with Mongoose
-----------------------------------
`npm install mongoose`