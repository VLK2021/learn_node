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

const users = [
    // {
    //     firstName: 'Volodymyr',
    //     lastName: 'Velykiy',
    //     email: 'lviv2022@gmail.com',
    //     password: '123qwe',
    //     age: 25,
    //     city: 'Lviv',
    // }
];
let error = '';

app.get('/login', (req, res) => {
    res.render('login')
})

// app.get('/users', (req, res) => {
//     res.render('users', {users})
// })

// app.post('/login', (req, res) => {
//     users.push(req.body)
//     res.redirect('/users')
// })



app.post('/login', ({ body }, res) => {
    const userExist = users.some(user => user.email === body.email);
    if (userExist) {
        error = 'User with this email exist!';
        res.redirect('/error');
        return;
    }

    users.push({ ...body, id: users.length ? users[users.length - 1].id + 1 : 1 });
    res.redirect('/users');
});




app.use((req, res) => {
    res.render('notFoundPage')
})

app.listen(5200, () => {
    console.log('Server has started on PORT 5200');
})