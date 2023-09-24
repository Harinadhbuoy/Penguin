import axios from "axios";


// Register service

const RegisterService = async(formData) => {
    const response = await axios.post(`http://localhost:8080/`, formData)

    return response;
}

// Login service
const LoginService = async(formData) => {
    const logindetails = await axios.post(`http://localhost:8080/login`, formData)
    return logindetails;
};

export default {RegisterService, LoginService};