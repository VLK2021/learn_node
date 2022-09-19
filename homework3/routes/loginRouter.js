const {Router} = require('express');
const loginController = require('../controllers/loginController');


const loginRouter = Router();

loginRouter.get('/', loginController.getPageLogin);
loginRouter.post('/', loginController.getUserLogin);


module.exports = loginRouter;