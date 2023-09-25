import ManageTourPackages from "../../components/admin_manage_tours/admin_manage";
import AdminHome from "../../components/admminhome/admin_home";
import "../../styles/admin_dashboard.css";

function Admin_dashboard()
{
    return(
        <div className="admin-dshboard">
            <AdminHome />
            <ManageTourPackages />
        </div>
    );
}

export default Admin_dashboard;