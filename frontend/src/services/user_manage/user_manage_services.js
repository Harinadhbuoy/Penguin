import axios from "axios";
import { toast } from "react-toastify";
import { env } from "../../env";


export const getToursUser = async() => {
    try{
    let response = await axios.get(`${env.REACT_APP_API}/userdashboard/getAllToursUser`);
    console.log("from services",response.data)
    return response.data;
    }
    catch(error) {
        console.error("error getting tours",error);
        throw error;
    };
};


export const createnewBookingTour = async (newBooking) => {

    console.log("fe-service",newBooking);

    let createBooking = await axios.post(`${env.REACT_APP_API}/userdashboard/createBooking`, { 
        tour_name: newBooking.tour_name,
        description: newBooking.description,
        tour_original_price: newBooking.tour_original_amount,
        tour_discount_price: newBooking.tour_discount_amount,
        user_email: newBooking.email
    }).then((res) => {
        console.log("service response", res)
        toast.success("tour created :)");
        return res;
    }).catch((err) => {
        return err.response;
    });
    return createBooking;
};