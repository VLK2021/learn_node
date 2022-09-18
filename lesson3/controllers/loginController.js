const users = require('../db/users');

class LoginController {
    renderLogin(req, res) {
        users.push(req.body)
        res.redirect('/users')
    }

    getLoginsStart(req, res) {
        res.render('login')
    }
}

module.exports = new LoginController();