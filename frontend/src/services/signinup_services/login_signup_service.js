import axios from "axios";
import { env } from "../../env";

// Register service

const RegisterService = async(formData) => {
    const response = await axios.post(`${env.REACT_APP_API}/`, formData)

    return response;
}

// Login service
const LoginService = async(formData) => {
    const logindetails = await axios.post(`${env.REACT_APP_API}/login`, formData)
    return logindetails;
};

export default {RegisterService, LoginService};