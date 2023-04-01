function isUserValid(req, res, next) {
    try {
        const {login, password} = req.body;

        if (!login || !password) {
            throw new Error('Login or password is not provided!');
        }
        if (password.length < 6) {
            throw new Error('Password is not valid!');
        }
        next()
    } catch (err) {
        console.log(err.message);
        res.status(400).send(err.message);
    }
}

module.exports = isUserValid;