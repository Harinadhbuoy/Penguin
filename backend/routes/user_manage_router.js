var express = require('express');
var router = express.Router();
var user_manage_controller = require("../model/controller/user_manage_controll/user_manage_control.js")


router.get('/getAllToursUser', user_manage_controller.getAllToursUser)

router.post('/createBooking' , user_manage_controller.createBooking )

router.get('/getUserBookings/:mail', user_manage_controller.getUserBookings )

router.post('/addComplaint', user_manage_controller.addComplaint)

module.exports = router;