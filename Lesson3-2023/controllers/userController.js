const users = require("../db/users");


class UserController {
    renderUsers(req, res) {
        res.render('users', {users})
    }

    getUserId(req, res) {
        const {userId} = req.params;
        res.json(users[userId])
    }


}

module.exports = new UserController();