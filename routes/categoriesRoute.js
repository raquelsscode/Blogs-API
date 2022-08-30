const { Router } = require('express');
const categoriesControllers = require('../controllers/categoriesControllers');

const isValid = require('../middlewares/validateCategory');
const tokenAuth = require('../middlewares/tokenAuth');

const categoriesRoute = Router();

categoriesRoute.post('/', tokenAuth.validateToken, isValid.validateCategory, 
categoriesControllers.categories);
categoriesRoute.get('/', tokenAuth.validateToken, categoriesControllers.getAll);

module.exports = categoriesRoute;