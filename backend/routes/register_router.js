var express = require('express');
var router = express.Router();
var signup_controller = require("../model/controller/signup_controller/singup_controller");
var login_controller = require("../model/controller/login_controller/login_controller")

router.post('/', signup_controller.create_user_admin)

router.post('/login', login_controller.Login_controller);

module.exports = router;

