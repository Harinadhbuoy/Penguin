import UserHome from "../../components/userhome/user_home";
import UserManageTours from "../../components/user_manage_tours/user_manage";

function Admin_dashboard()
{
    return(
        <div>
            <UserHome />
            <UserManageTours />
        </div>
    );
}

export default Admin_dashboard;