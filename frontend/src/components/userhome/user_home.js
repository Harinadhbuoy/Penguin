import {React,useState} from 'react';
import "../../styles/admin_home.css";
import logo from "../../assets/images/image4.png";
import image from "../../assets/images/image2.jpg";
import { useNavigate } from 'react-router-dom';
import ComplaintForm from '../add_complaint';

const UserHome = () => {
   const Navigate = useNavigate();
   const [isModalOPen, setModalOpen] = useState(false);

  const handleLogout = () => {
    Navigate('/')
  };


  const handleAddComplaint = (newComplaint) => {
        console.log("complaint details", newComplaint)
  }

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span>Live Love Travel</span>
        </div>
        <button className="my-btn" onClick={() => setModalOpen(true)}>
          Raise complaint
        </button>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
        
        <ComplaintForm isOpen={isModalOPen}
        onClose={() => setModalOpen(false)}
        onSave={handleAddComplaint}
      />

      </div>
      {/* <div className="image-container">
        <img src={image} alt="Image" className="page-image" />
      </div> */}
    </div>
  );
};

export default UserHome;