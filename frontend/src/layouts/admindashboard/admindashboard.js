import ManageTourPackages from "../../components/admin_manage_tours/admin_manage";
import AdminHome from "../../components/admminhome/admin_home";
import AdminViewBookings from "../../components/admin_view_bookings/admin_view_bookings";
import "../../styles/admin_dashboard.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Admin_dashboard()
{
    const Navigate = useNavigate();
    useEffect(() => {
        const token_check = localStorage.getItem('admin_token')
        if(!token_check){
           Navigate('/')
        }
    })
    return(
        <div className="admin-dshboard">
            <AdminHome /><br/>
            <ManageTourPackages /><br/>
            <AdminViewBookings />
        </div>
    );
}

export default Admin_dashboard;