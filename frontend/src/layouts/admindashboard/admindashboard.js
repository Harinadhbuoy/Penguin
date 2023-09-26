import ManageTourPackages from "../../components/admin_manage_tours/admin_manage";
import AdminHome from "../../components/admminhome/admin_home";
import AdminViewBookings from "../../components/admin_view_bookings/admin_view_bookings";
import "../../styles/admin_dashboard.css";

function Admin_dashboard()
{
    return(
        <div className="admin-dshboard">
            <AdminHome /><br/>
            <ManageTourPackages /><br/>
            <AdminViewBookings />
        </div>
    );
}

export default Admin_dashboard;