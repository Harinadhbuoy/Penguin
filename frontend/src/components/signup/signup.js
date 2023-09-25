import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/signup.css";
import logo from "../../assets/images/image2.jpg";
import login_signup_service from "../../services/signinup_services/login_signup_service"

const SignupPage = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBtton = () =>{
    Navigate('/')
}

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add your backend connection code here
    login_signup_service.RegisterService(formData).then(response => {
      alert("Registration successful please login");
      Navigate('/')
      
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        contactNumber: ''
      });

    }).catch(err =>{
      console.log("error registering");
    })

    console.log(formData); // This will show the form data in the console
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
          <p>SIGNUP FORM</p>
          <input
            type="text"
            name="name"
            className="input-feild"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
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
          <input
            type="password"
            name="confirmPassword"
            className="input-feild"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
          <input
            type="tel"
            name="contactNumber"
            className="input-feild"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
            required
          />
          <div className='my-buttons'>
          <button type="submit" onClick={handleBtton}>Already an user?</button>
          <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
