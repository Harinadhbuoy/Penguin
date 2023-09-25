import UserHome from "../../components/userhome/user_home";
import UserManageTours from "../../components/user_manage_tours/user_manage";
import UserBookings from "../../components/user_bookings/user_bookings";

function Admin_dashboard()
{
    return(
        <div>
            <UserHome />
            <UserManageTours />
            <UserBookings />
        </div>
    );
}

export default Admin_dashboard;