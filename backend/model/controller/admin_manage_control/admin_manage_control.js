const db = require("../../entities");
const tours_table = db.tourstable;
const jwt = require('jsonwebtoken')



// controller for creating tour
const createTour = async (req, res) => {
    console.log("data",req.body)
    try{

    let createNewTour = await tours_table.create(req.body); 
    res.status(200).send({ message: "Tour created" });
    
  } catch (error) {
    res.status(400).send({ message: "Internal error" });
  }
};


// controller for displaying tours
const getAllTours = async (req , res) => {
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


// controller for deleting tour
const deleteTourById = async  (req , res) => {
    console.log("id", req.body.tourId)
    if(req.body.tourId){
        await tours_table.destroy({
            where : {
                id : req.body.tourId,
            }
        });
        res.send({statusCode: 200 ,  message: "deleted"})
        console.log("delete successful");
    } else {
        res.status(400).send("delete failed");
    }
};



module.exports = {
    createTour,
    getAllTours,
    deleteTourById,
};