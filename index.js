const express = require('express');
const app = express();
const port = 3000
const exphbs  = require('express-handlebars');
// app.use(express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home')
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
