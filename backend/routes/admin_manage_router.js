var express = require('express');
var router = express.Router();
var add_event_controller = require("../model/controller/admin_manage_control/admin_manage_control.js");


router.post('/createTour', add_event_controller.createTour);

router.get('/getAllTours', add_event_controller.getAllTours);

router.put('/deleteTour', add_event_controller.deleteTourById);

router.get('/getUserComplaints', add_event_controller.getUserComplaints);

module.exports = router;