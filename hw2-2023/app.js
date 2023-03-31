const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));


const users = [
    {
        firstName: 'Volodymyr',
        lastName: 'Volodymyr',
        email: 'vol@gmail.com',
        password: 12345,
        age: 25,
        city: 'Lviv'
    },
    {
        firstName: 'Vol',
        lastName: 'dymyr',
        email: 'vewrol@gmail.com',
        password: 12345,
        age: 15,
        city: 'Odessa'
    },
    {
        firstName: 'Vitt',
        lastName: 'Volodymyr',
        email: 'vbhdht@gmail.com',
        password: 33122345,
        age: 35,
        city: 'Kyiv'
    },
]


app.get('/login', (req, res) => {
    res.render('login')
});


app.get('/users', (req, res) => {
    if (Object.keys(req.query).length) {
        let usersArray = [...users];
        if (req.query.city) {
            usersArray = usersArray.filter(us => us.city === req.query.city);
        }
        if (req.query.age) {
            usersArray = usersArray.filter(us => us.age === req.query.age);
        }
        res.render('users', {users: usersArray});
        return;
    }
    res.render('users', {users});
});


app.get('/error', (req, res) => {
    res.render('error');
});

app.get('/users/:userId', (req, res) => {
    const {userId} = req.params;
    const user = users[userId];

    res.render('user', {user});

})


app.post('/login', (req, res) => {
    const {email} = req.body;
    const em = users.some(us => us.email === email);
    if (em) {
        res.redirect('/error');
    } else {
        users.push(req.body);
        res.redirect('/users');
    }
});



app.use((req, res) => {
    res.render('notFound')
})

app.listen(5200, () => {
    console.log('Servak is started on 5200 port!!!');
})