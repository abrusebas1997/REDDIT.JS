const express = require('express');
const app = express();
const port = 3000
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
// app.use(express.static('public'));
require('./controllers/posts.js')(app);
// Set db
require('./data/reddit-db');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
app.use(expressValidator());


app.get('/', (req, res) => {
    res.render('home')
})

app.post('/posts/new', (req, res) => {
  return res.send('posts-new');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
