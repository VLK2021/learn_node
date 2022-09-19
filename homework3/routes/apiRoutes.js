const {Router} = require('express');
const loginRouter = require('./loginRouter');
const userRouter = require('./userRouter');

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/users', userRouter);

routes.use((req, res) => {
    res.render('notFound')
})

module.exports = routes;