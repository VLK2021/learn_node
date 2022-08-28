// 1. /login, поля які треба відрендерити в файлі hbs: firstName, lastName, email(унікальне поле),
// password, age, city
// просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися в масив і редірект
// робити на сторінку з усіма юзерами /users і перевірка чи такий імейл не існує, якщо існує то редірект на еррор пейдж
// 2. /users просто сторінка з усіма юзерами, але можна по квері параметрам їх фільтрувати по age і city
// 3. /user/:id сторінка з інфою про одного юзера
// 4. зробити якщо не відпрацюють ендпоінти то на сторінку notFound редірект


const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');



const users = [];
let error = '';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'components')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'components'));


app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/users', (req, res) => {
    res.render('users', {users})
})





app.post('/login', (req, res) => {
    users.push(req.body)
    res.redirect('/users')
})






app.use((req, res) => {
    res.render('error')
})


app.listen(5200, () => {
    console.log('Server has started on port 5200');
})