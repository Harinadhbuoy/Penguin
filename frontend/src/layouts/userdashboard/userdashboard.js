import UserHome from "../../components/userhome/user_home";
import UserManageTours from "../../components/user_manage_tours/user_manage";
import UserBookings from "../../components/user_bookings/user_bookings";
import "../../styles/user_dashboard.css";

function Admin_dashboard()
{
    return(
        <div className= "user-dashboard" >
            <UserHome />
            <UserManageTours />
            <UserBookings />
        </div>
    );
}

export default Admin_dashboard;