import UserHome from "../../components/userhome/user_home";
import UserManageTours from "../../components/user_manage_tours/user_manage";
import UserBookings from "../../components/user_bookings/user_bookings";
import "../../styles/user_dashboard.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function User_dashboard()
{
    const Navigate = useNavigate();
    useEffect(() => {
    const token_check = localStorage.getItem('user_token')
    if(!token_check){
        Navigate('/');
    }

    })
    return(
        <div className= "user-dashboard" >
            <UserHome />
            <UserManageTours />
            <UserBookings />
        </div>
    );
}

export default User_dashboard;