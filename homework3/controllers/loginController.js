const users = require('../db/users');

class LoginController {
    getPageLogin(req, res) {
        res.render('login');
    }

    getUserLogin(req, res) {
        users.push(req.body);
        res.redirect('users');
    }
}

module.exports = new LoginController();