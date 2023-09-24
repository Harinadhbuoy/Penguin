import axios from "axios";
import { toast } from "react-toastify";

// creating tour
export const createnewTour = async (newTour) => {

    console.log(newTour);
    let createTour = await axios.post(`http://localhost:8080/dashboard/createTour`, {
        tour_name: newTour.tour_name,
        description: newTour.description,
        tour_original_price: newTour.tour_original_amount,
        tour_discount_price: newTour.tour_discount_amount
    }).then((res) => {
        console.log("service response", res)
        toast.success("tour created :)");
        return res;
    }).catch((err) => {
        return err.response;
    });
    return createTour;
};


//Loading tour data into admin dashboard
// export const getTours = async() => {
//     let getAllTours = await axios.get(`http://localhost:8080/dashboard/getAllTours`)
//     .then((res) => {
//         console.log("get all tours frontend service", getAllTours)
//         return res;
//     })
//     .catch((error) =>{
//         return error.response;
//     })
//     return getAllTours;
// };



export const getTours = async() => {
    try{
    let response = await axios.get(`http://localhost:8080/dashboard/getAllTours`);
    console.log("from services",response.data)
    return response.data;
    }
    catch(error) {
        console.error("error getting events",error);
        throw error;
    };
};



// export default createnewTour;

// module.exports = {
//     createnewTour,
//     getTours,
// };