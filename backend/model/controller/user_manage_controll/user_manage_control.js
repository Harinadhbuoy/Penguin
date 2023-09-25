const db = require("../../entities");
const tours_table = db.tourstable;
const bookings_table = db.bookingstable
const jwt = require('jsonwebtoken')




// controller for displaying tours for users
const getAllToursUser = async (req , res) => {
    try{
        let get_tours = await tours_table.findAll();
        if(get_tours) {
            console.log("finadall success",get_tours);
            res.send({statusCode : 200, get_tours});
        } else{
            res.status(400).send({statusCode: 400, message: "No data"});
        }
    } catch(error){
        res.status(500).send({statusCode: 400, message: "internal error"})
    }
};


const createBooking = async (req, res) => {
    console.log("data",req.body)
    try{

    let createNewBooking = await bookings_table.create(req.body); 
    res.status(200).send({ message: "Tour created" });
    
  } catch (error) {
    res.status(400).send({ message: "Internal error" });
  }
};



module.exports = {
    getAllToursUser,
    createBooking,
};
