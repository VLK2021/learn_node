function isDataUserValid(req, res, next) {
    try {
        const {firstName, lastName, email, password, age, city} = req.body;

        if (firstName.length < 2 || lastName.length < 2) {
            throw new Error('firstName and lastName mast be min 2 sumbols');
        }
        if (!email.includes('@')) {
            throw new Error('\'Not valid email address!\'');
        }
        if (password.length < 5) {
            throw new Error('Password is not valid!');
        }
        if (age < 18) {
            throw new Error('Age is not valid!');
        }
        if (city.length < 3) {
            throw new Error('City is not valid!');
        }

        next();
    } catch (err) {
        // res.redirect(`/error?error=${err.message}`)
        console.log(err.message);
        res.status(400).send(err.message);
    }
}

module.exports = isDataUserValid;