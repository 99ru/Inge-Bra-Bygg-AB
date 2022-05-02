const { Router } = require('express');
const AuthController = require('../controllers/AuthController');
const Validations = require('../validations');


const router = new Router();

router.post('/auth',
  Validations.login,
  asyncHandler(AuthController.authenticate)
)

module.exports = router