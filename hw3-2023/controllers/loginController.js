const users = require("../db/users");

class LoginController {
    renderLogin(req, res) {
        res.render('login');
    }

    pushUsers(req, res) {
        const {email} = req.body;
        const em = users.some(us => us.email === email);
        if (em) {
            res.redirect('/error');
        } else {
            users.push(req.body);
            res.redirect('/users');
        }
    }
}

module.exports = new LoginController();