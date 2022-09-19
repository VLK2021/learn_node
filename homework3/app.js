// 1. /login, поля які треба відрендерити в файлі hbs: firstName, lastName, email(унікальне поле),
// password, age, city
// просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися в масив і редірект
// робити на сторінку з усіма юзерами /users і перевірка чи такий імейл не існує, якщо існує то редірект на еррор пейдж
// 2. /users просто сторінка з усіма юзерами, але можна по квері параметрам їх фільтрувати по age і city
// 3. /user/:id сторінка з інфою про одного юзера
// 4. зробити якщо не відпрацюють ендпоінти то на сторінку notFound редірект

// Попереднє дз переписати на роути і контролери і написати мідлвару яка буде перевіряти по роуту /sigIn
// чи імейл існує в масиві юзерів і другу мідлвару /login чи користувач ввів всі data


const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');
const apiRoutes = require('../homework3/routes/apiRoutes');

const app = express();

//default setup
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'static')));

//engine setup
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

//routes setup
app.use(apiRoutes);

app.listen(5200, () => {
    console.log('Server has started on PORT 5200');
})


