const {Router} = require('express');

const userRouter = require('../routes/userRouter');
const loginRouter = require('../routes/loginRouter');
const errorRouter = require('../routes/errorRouter');


const routes = Router();

routes.use('/login', loginRouter);
routes.use('/users', userRouter);
routes.use('/error', errorRouter);


routes.use((req, res) => {
    res.render('notFound')
});

module.exports = routes;