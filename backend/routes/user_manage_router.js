var express = require('express');
var router = express.Router();
var user_manage_controller = require("../model/controller/user_manage_controll/user_manage_control.js")

// var add_event_controller = require("../model/controller/admin_manage_control/admin_manage_control.js");





// router.post('/createTour', add_event_controller.createTour);
// router.get('/getAllTours', add_event_controller.getAllTours);
// router.put('/deleteTour', add_event_controller.deleteTourById);

router.get('/getAllToursUser', user_manage_controller.getAllToursUser)

router.post('/createBooking' , user_manage_controller.createBooking )

module.exports = router;