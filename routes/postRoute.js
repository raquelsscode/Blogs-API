const { Router } = require('express');
const postControllers = require('../controllers/postControllers');

const isValid = require('../middlewares/validatePost');
const tokenAuth = require('../middlewares/tokenAuth');

const postRoute = Router();

postRoute.post('/', tokenAuth.validateToken, isValid.validatePost, postControllers.post);

module.exports = postRoute;