const {Router} = require('express');
const loginController = require('../controllers/loginController');
const loginMiddleware = require('../middleware/isUserValid');


const loginRouter = Router();

loginRouter.get('/', loginController.getPageLogin);
loginRouter.post('/', loginMiddleware, loginController.getUserLogin);


module.exports = loginRouter;