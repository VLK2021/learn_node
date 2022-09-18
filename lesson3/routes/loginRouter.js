const {Router} = require('express');
const loginController = require('../controllers/loginController');
const loginMiddleware = require('../middleware/isUserValid');

const loginRouter = Router();


loginRouter.get('/', loginController.getLoginsStart);
loginRouter.post('/', loginMiddleware, loginController.renderLogin);


module.exports = loginRouter;
