const {Router} = require('express');

const users = require('../db/users');
const LoginController = require('../controllers/loginController');
const loginMiddleware = require('../middleware/isUserValid');

const loginRouter = Router();


loginRouter.get('/', LoginController.renderLogin);
loginRouter.post('/', loginMiddleware, LoginController.pushUsers);

module.exports = loginRouter;