const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'component')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'component'));


app.get('/login', (req, res) => {
    res.render('login')
})

app.use((req, res) => {
    res.render('notFoundPage')
})




app.listen(5200, () => {
    console.log('Server has started on PORT 5200');
})