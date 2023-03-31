const {Router} = require('express');
const users = require('../db/users');

const userRouter = Router();


userRouter.get('/', (req, res) => {
    res.render('users', {users})
});

userRouter.get('/:userId',(req, res) => {
    const {userId} = req.params;
    res.json(users[userId])
});

module.exports = userRouter;


