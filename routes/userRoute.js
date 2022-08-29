const { Router } = require('express');

const userControllers = require('../controllers/userControllers');
const isValid = require('../middlewares/validateUser');
const tokenAuth = require('../middlewares/tokenAuth');

const userRoute = Router();

userRoute.post('/', isValid.validateUser, userControllers.user);
userRoute.get('/', tokenAuth.validateToken, userControllers.getAll);

module.exports = userRoute;