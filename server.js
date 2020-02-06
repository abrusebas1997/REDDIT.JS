
var express = require("express");
var exphbs = require("express-handlebars");

const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

var app = express();

// Add after body parser initialization!
app.use(expressValidator());

// Use Body Parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

require("./controllers/posts.js")(app);
// Set db
require("./data/reddit-db");

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/posts/new", function(rew, res) {
  res.render("posts-new");
});

app.listen(3000);


module.exports = app;
