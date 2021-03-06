/* Mongoose Connection */
const mongoose = require("mongoose");
require('dotenv').config();
assert = require("assert");

// const url = "mongodb://localhost/reddit-db";


mongoose.Promise = global.Promise;
const mongo_uri = process.env.MONGODB_URI
mongoose.connect(mongo_uri)




mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
mongoose.set("debug", true);

module.exports = mongoose.connection;
