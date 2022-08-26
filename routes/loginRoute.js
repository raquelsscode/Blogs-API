const { Router } = require('express');

const loginControllers = require('../controllers/loginControllers');
const isValid = require('../middlewares/validateLogin');

const loginRoute = Router();

loginRoute.post('/', isValid.validateLogin, loginControllers.login);

module.exports = loginRoute;