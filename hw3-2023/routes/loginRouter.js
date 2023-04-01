const {Router} = require('express');

const users = require('../db/users');
const loginController = require('../controllers/loginController');
const isDataUserValid = require('../middlewares/isDataUserValid');


const loginRouter = Router();

loginRouter.get('/', loginController.renderLogin);
loginRouter.post('/', isDataUserValid, loginController.pushUsers);

module.exports = loginRouter;