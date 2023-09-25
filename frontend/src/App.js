import logo from './logo.svg';
import './App.css';
import SignupPage from './components/signup/signup';
import LoginPage from './components/login/login';
import Admin_dashboard from './layouts/admindashboard/admindashboard';
import User_dashboard from './layouts/userdashboard/userdashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AdminHome from './components/admminhome/admin_home';
// import ManageTourPackages from './components/admin_manage_tours/admin_manage';
import TourForm from './components/addtour_package/addtour_package';
import UserHome from './components/userhome/user_home';
import UserManageTours from './components/user_manage_tours/user_manage';
import UserBookings from './components/user_bookings/user_bookings';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/admindashboard" element={<Admin_dashboard />} />
          <Route path="/userdashboard" element={<User_dashboard />} />
        </Routes>
      </BrowserRouter>
      {/* <UserHome />  */}
      {/* <UserManageTours /> */}
      {/* <UserBookings /> */}
    </div>
  );
}

export default App;
