import axios from "axios";
import { env } from "../../env";


// creating tour service
export const createnewTour = async (newTour) => {

    console.log("jkgnjkgg", newTour);
    let createTour = await axios.post(`${env.REACT_APP_API}/dashboard/createTour`, {
        tour_name: newTour.tour_name,
        description: newTour.description,
        tour_original_price: newTour.tour_original_price,
        tour_discount_price: newTour.tour_discount_price
    }).then((res) => {
        console.log("service response", res)
        return res;
    }).catch((err) => {
        return err.response;
    });
    return createTour;
};

// Get tours service
export const getTours = async () => {
    try {
        let response = await axios.get(`${env.REACT_APP_API}/dashboard/getAllTours`);
        console.log("from services", response.data)
        return response.data;
    }
    catch (error) {
        console.error("error getting events", error);
        throw error;
    };
};


// Delete tour service
export const deletetour = async (tourId) => {
    const response = await axios.put(`${env.REACT_APP_API}/dashboard/deleteTour`, {
        tourId: tourId,
    });
    return response;
}


// get complaints service
export const getUserComplaints = async () => {
    console.log("flow came to frontend service");
    try {
        let response = await axios.get(`${env.REACT_APP_API}/dashboard/getUserComplaints`);
        console.log("from services boom", response.data)
        return response.data;
    }
    catch (error) {
        console.error("error getting tours", error);
        throw error;
    };
};











// export default createnewTour;

// module.exports = {
//     createnewTour,
//     getTours,
// };
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