const {Router} = require('express');

const users = require('../db/users');
const loginController = require('../controllers/loginController');


const loginRouter = Router();

loginRouter.get('/', loginController.renderLogin);
loginRouter.post('/', loginController.pushUsers)

module.exports = loginRouter;