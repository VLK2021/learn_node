const users = require('../db/users');


function isUserValid(req, res, next){
    try {
        const {firstName, lastName, email, password, age, city} = req.body;

        const userEmail = users.some(user => user.email === req.body.email)

        if (!firstName || !lastName || !email || !password || !age || !city) {
            throw new Error('one of values is not provided!!!!')
        }

        if(password.length < 6) {
            throw new Error('password is not valid')
        }

        if (userEmail) {
            throw new Error('this user is in the array!!!!')
        }

        next();
    }catch (err) {
        console.log(err.message);
        res.status(400).send(err.message)
    }

}

module.exports = isUserValid;