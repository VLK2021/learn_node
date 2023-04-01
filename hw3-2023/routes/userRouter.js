const {Router} = require('express');

const users = require('../db/users');



const userRouter = Router();

userRouter.get('/', (req, res) => {
    if (Object.keys(req.query).length) {
        let usersArray = [...users];
        if (req.query.city) {
            usersArray = usersArray.filter(us => us.city === req.query.city);
        }
        if (req.query.age) {
            usersArray = usersArray.filter(us => us.age === req.query.age);
        }
        res.render('users', {users: usersArray});
        return;
    }
    res.render('users', {users});
});

userRouter.get('/:userId', (req, res) => {
    const {userId} = req.params;
    const user = users[userId];

    res.render('user', {user});

})

module.exports = userRouter;
