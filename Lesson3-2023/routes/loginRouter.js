const {Router} = require('express');
const users = require('../db/users');

const loginRouter = Router();


loginRouter.get('/', (req, res) => {
    res.render('login')
});

loginRouter.post('/', (req, res) => {
    users.push(req.body)
    res.redirect('/users')
});


module.exports = loginRouter;