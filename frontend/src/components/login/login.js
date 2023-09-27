import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/login.css";
import logo from "../../assets/images/login.png";
import login_signup_service from "../../services/signinup_services/login_signup_service";
import { toast } from 'react-toastify';

const LoginPage = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleBtton = () => {
    Navigate('/signup');
  }

  // frontend service for login
  const handleSubmit = async (e) => {
    console.log("submit is clicked");
    e.preventDefault();
    let logindetails = await login_signup_service.LoginService(formData);
    sessionStorage.setItem("email", formData.email);
    console.log("email: ", logindetails.data.existingUser.email);

    if (logindetails.data.existingUser.email === "admin@gmail.com") {
      toast.success('Admin login successfull !', {
        position: toast.POSITION.TOP_RIGHT
      });
      Navigate('/admindashboard');
    }
    else {
      toast.success('User login successfull !', {
        position: toast.POSITION.TOP_RIGHT
      });
      Navigate('/userdashboard');
    }
  };



  return (
    <div className="signup-container">
      <div className="left-container">
        <img
          src={logo}
          // alt="Signup"
          className="signup-image"
        />
      </div>
      <div className="right-container">
        <form onSubmit={handleSubmit}>
          <p>LOGIN FORM</p>
          <input
            type="email"
            name="email"
            className="input-feild"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            className="input-feild"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <div className='my-buttons'>
            <button type="submit" onClick={handleBtton}>New User?</button>
            <button type="submit">SignIn</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
