import ManageTourPackages from "../../components/admin_manage_tours/admin_manage";
import AdminHome from "../../components/admminhome/admin_home";

function Admin_dashboard()
{
    return(
        <div>
            <AdminHome />
            <ManageTourPackages />
        </div>
    );
}

export default Admin_dashboard;