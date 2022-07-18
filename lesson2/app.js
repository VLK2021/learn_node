// const express = require('express');
// const app = express();
//
// app.get('/welcome', (req, res) => {
//     res.send('Hello from server')
// })
//
// app.listen(5200, () => {
//     console.log('Server has started on PORT 5200');
// })
//=============================================================

// const express = require('express');
// const app = express();
//
// // const users = [
// //     {
// //         name: 'tead',
// //         city: 'lviv'
// //     },
// //     {
// //         name: 'tead',
// //         city: 'Kyiv'
// //     },
// //     {
// //         name: 'tead',
// //         city: 'Lytck'
// //     },
// //     {
// //         name: 'tead',
// //         city: 'Hust'
// //     },
// // ]
//
// // app.get('/welcome', (req, res) => {
// //     res.json(users)
// // })
//
// app.listen(5200, () => {
//     console.log('Server has started on PORT 5200');
// })

//=======================================================

const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');

const users = [
    {
        login: 'tead',
        password: 'lviv'
    },
    {
        login: 'tead',
        password: 'Kyiv'
    },
]

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));


app.get('/login', ((req, res) => {
    res.render('login')
}))

app.get('/users', (req, res) => {
    res.render('users', {users})
})

app.post('/login', (req, res) => {
    // console.log(req.body);
    users.push(req.body)
    res.redirect('/users')
})



 app.listen(5200, () => {
    console.log('Server has started on PORT 5200');
})






