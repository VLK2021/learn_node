const users = require("../db/users");


class UserController {

    renderUsers(req, res) {
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
    }

    getUserById(req, res) {
        const {userId} = req.params;
        const user = users[userId];
        res.render('user', {user});
    }

}
module.exports = new UserController;