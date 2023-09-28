import React from 'react';
import "../../styles/admin_home.css";
import logo from "../../assets/images/image4.png";
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
  const Navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    Navigate('/');
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span>Live Love Travel</span>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminHome;
