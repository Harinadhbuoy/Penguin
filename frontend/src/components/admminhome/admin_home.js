import React from 'react';
import "../../styles/admin_home.css";
import logo from "../../assets/images/image4.png";
import image from "../../assets/images/image2.jpg";
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
  const Navigate = useNavigate();
  const handleLogout = () => {
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
      {/* <div className="image-container">
        <img src={image} alt="Image" className="page-image" />
      </div> */}
    </div>
  );
};

export default AdminHome;
