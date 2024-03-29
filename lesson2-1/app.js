const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');

// const users = [
//     {
//         name: 'vova',
//         city: 'lviv'
//     },
//     {
//         name: 'vityaa',
//         city: 'lytsk'
//     },
//     {
//         name: 'valyaa',
//         city: 'lviv'
//     },
//     {
//         name: 'vita',
//         city: 'kyiv'
//     },
// ]
//
// app.get('/welcome', (req, res) => {
//     res.json(users)
// })

const users = [
    {
        login: 'vova',
        password: 'lviv'
    },
    {
        login: 'vityaa',
        password: 'lytsk'
    },
    {
        login: 'valyaa',
        password: 'lviv'
    },
    {
        login: 'vita',
        password: 'kyiv'
    },
]

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));



app.get('/login',(req, res) => {
    res.render('login')
})

app.get('/users', (req, res) => {
    res.render('users', {users})
})

app.get('/users/:userId', (req, res) => {
    const {userId} = req.params;
    res.json(users[userId])
})


app.post('/login', (req, res) => {
    // console.log(req.body);
    users.push(req.body)
    res.redirect('/users')

})





app.listen(5200, () => {
    console.log('Server has started on port 5200');
})




