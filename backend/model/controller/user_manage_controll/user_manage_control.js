const db = require("../../entities");
const tours_table = db.tourstable;
const bookings_table = db.bookingstable
const complaints_table = db.complaintstable
const jwt = require('jsonwebtoken')




// controller for displaying tours for users
const getAllToursUser = async (req, res) => {
    try {
        let get_tours = await tours_table.findAll();
        if (get_tours) {
            console.log("finadall success", get_tours);
            res.send({ statusCode: 200, get_tours });
        } else {
            res.status(400).send({ statusCode: 400, message: "No data" });
        }
    } catch (error) {
        res.status(500).send({ statusCode: 400, message: "internal error" })
    }
};

// Controller for creating booking
const createBooking = async (req, res) => {
    console.log("data", req.body)
    try {

        let createNewBooking = await bookings_table.create(req.body);
        res.status(200).send({ message: "Tour created" });

    } catch (error) {
        res.status(400).send({ message: "Internal error" });
    }
};


// Controller for getting user bookings
const getUserBookings = async (req, res) => {

    let mail = req.params.mail;
    console.log(mail, "this is a mail");
    try {
        const get_bookings = await bookings_table.findAll({
            where: {
                user_email: mail,
            },
        });

        if (get_bookings) {
            console.log("finding bookings success", get_bookings);
            res.send({ statusCode: 200, get_bookings });
        } else {
            res.status(400).send({ statusCode: 400, message: "No records found" });
        }
    } catch (error) {
        res.status(500).send({ statusCode: 400, message: "internal error" })
    }
};


// Controller for adding complaint
const addComplaint = async (req, res) => {
    console.log("data in backend controller", req.body)

    try {
        let AddNewComplaint = await complaints_table.create(req.body);
        res.status(200).send({ message: "Complaint Added" });

    } catch (error) {
        res.status(400).send({ message: "Internal error" });
    }
};


module.exports = {
    getAllToursUser,
    createBooking,
    getUserBookings,
    addComplaint,
};

