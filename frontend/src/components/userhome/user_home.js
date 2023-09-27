import { React, useState } from 'react';
import "../../styles/admin_home.css";
import logo from "../../assets/images/image4.png";
import { useNavigate } from 'react-router-dom';
import ComplaintForm from '../add_complaint';
import { AddNewComplaint } from '../../services/user_manage/user_manage_services';

const UserHome = () => {
    const Navigate = useNavigate();
    const [isModalOPen, setModalOpen] = useState(false);
    const [complaint, setComplaint] = useState([]);

    const handleLogout = () => {
        Navigate('/')
    };


    const handleAddComplaint = async (newComplaint) => {
        console.log("complaint details", newComplaint)
        setComplaint([...complaint, newComplaint])

        await AddNewComplaint(newComplaint)
        // alert("complaint added successfully")

    }

    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <span>Live Love Travel</span>
                </div>
                <div>
                    <button className="my-btn" onClick={() => setModalOpen(true)}>
                        Raise complaint
                    </button>
                    <button className="logout-button" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
                <ComplaintForm isOpen={isModalOPen}
                    onClose={() => setModalOpen(false)}
                    onSave={handleAddComplaint}
                />

            </div>
        </div>
    );
};

export default UserHome;