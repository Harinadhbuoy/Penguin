import axios from "axios";
import { toast } from "react-toastify";
import { env } from "../../env";

//for getting all tours service 
export const getToursUser = async () => {
    try {
        let response = await axios.get(`${env.REACT_APP_API}/userdashboard/getAllToursUser`);
        console.log("from services", response.data)
        return response.data;
    }
    catch (error) {
        console.error("error getting tours", error);
        throw error;
    };
};


// creating booking service
export const createnewBookingTour = async (newBooking) => {

    console.log("fe-service", newBooking);

    let createBooking = await axios.post(`${env.REACT_APP_API}/userdashboard/createBooking`, {
        tour_name: newBooking.tour_name,
        description: newBooking.description,
        tour_original_price: newBooking.tour_original_price,
        tour_discount_price: newBooking.tour_discount_price,
        user_email: newBooking.email
    }).then((res) => {
        console.log("service response", res)
        return res;
    }).catch((err) => {
        return err.response;
    });
    return createBooking;
};



// getting specific user bookings service
export const getUserBookings = async (mail) => {
    console.log(mail);
    try {
        let response = await axios.get(`${env.REACT_APP_API}/userdashboard/getUserBookings/${mail}`);
        console.log("from services boom", response.data)
        return response.data;
    }
    catch (error) {
        console.error("error getting tours", error);
        throw error;
    };
};


// Adding complaint service
export const AddNewComplaint = async (newComplaint) => {
    console.log("complaint deetails before response", newComplaint);
    let addComplaint = await axios.post(`${env.REACT_APP_API}/userdashboard/addComplaint`, {
        complaint_category: newComplaint.complaint_category,
        description: newComplaint.description,
        complaint_reason: newComplaint.complaint_reason
    }).then((res) => {
        console.log("service response", res)
        toast.success(" Complaint added successfully :)");
        return res;
    }).catch((err) => {
        return err.response;
    });
    return addComplaint;
};