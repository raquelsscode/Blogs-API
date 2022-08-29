const { Router } = require('express');

const userControllers = require('../controllers/userControllers');
const isValid = require('../middlewares/validateUser');

const userRoute = Router();

userRoute.post('/', isValid.validateUser, userControllers.user);

module.exports = userRoute;