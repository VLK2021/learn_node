// const {EventEmitter} = require('events');
// const ee = new EventEmitter();

// ee.on('Log', () => {
//     console.log('Log is working');
// })
// ee.emit('Log');

const {EventEmitter} = require('events');
const ee = new EventEmitter();

ee.on('Log', (name) => {
    console.log(`Log is working!!! ${name}`);
})
// ee.emit('Log', 'Volodymyr');
// ee.emit('Log', 'Volodymyr');
// ee.emit('Log', 'Volodymyr');
// ee.emit('Log', 'Volodymyr');

ee.once('Tes', () =>{
    console.log('once is working');
})
ee.emit('Test');
ee.emit('test');
ee.emit('test');
ee.emit('test');








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

// work with params of url
app.get('/users/:userId', (req, res) => {
    // console.log(req.params);
    const {userId} = req.params;
    console.log(req.query);
    res.json(users[userId])
})

app.post('/login', (req, res) => {
    // console.log(req.body);
    users.push(req.body)
    res.redirect('/users')
})

app.use((req, res) => {
    res.render('notFound')
})

 app.listen(5200, () => {
    console.log('Server has started on PORT 5200');

})






