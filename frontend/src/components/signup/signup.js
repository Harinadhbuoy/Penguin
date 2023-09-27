import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/signup.css";
import { toast } from "react-toastify";
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

  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'password') {
      validatePassword(value);
    }

    if (name === 'confirmPassword') {
      validateConfirmPassword(value);
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError('Password should contain at least 8 characters with one capital letter, one special character, and one number.');
    } else {
      setPasswordError('');
    }
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (confirmPassword !== formData.password) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleBtton = () => {
    Navigate('/')
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordError || confirmPasswordError) {
      toast.error(passwordError || confirmPasswordError, {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }

    // Add your backend connection code here
    login_signup_service.RegisterService(formData).then(response => {
      toast.success('Signup successful! Please login.', {
        position: toast.POSITION.TOP_RIGHT
      });

      Navigate('/')
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        contactNumber: ''
      });

    }).catch(err => {
      console.log("error registering");
    })

    console.log(formData); // This will show the form data in the console
  };

  return (
    <div className="signup-container">
      <div className="left-container">
        <img
          src={logo}
          className="signup-image"
          alt="Signup"
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
          <span className="password-error">{passwordError}</span>
          <input
            type="password"
            name="confirmPassword"
            className="input-feild"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
          <span className="confirm-password-error" style={{ color: 'red' }}>{confirmPasswordError}</span>
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
            <button type="submit" onClick={handleBtton}>Already a user?</button>
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;









// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "../../styles/signup.css";
// import {toast} from "react-toastify";
// import logo from "../../assets/images/image2.jpg";
// import login_signup_service from "../../services/signinup_services/login_signup_service"

// const SignupPage = () => {
//   const Navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     contactNumber: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleBtton = () =>{
//     Navigate('/')
// }

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Add your backend connection code here
//     login_signup_service.RegisterService(formData).then(response => {
//       toast.success('Signup successfull please login !', {
//         position: toast.POSITION.TOP_RIGHT
//       });

//       Navigate('/')
//       setFormData({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         contactNumber: ''
//       });

//     }).catch(err =>{
//       console.log("error registering");
//     })

//     console.log(formData); // This will show the form data in the console
//   };

//   return (
//     <div className="signup-container">
//       <div className="left-container">
//         <img
//           src={logo}
//           // alt="Signup"
//           className="signup-image"
//         />
//       </div>
//       <div className="right-container">
//         <form onSubmit={handleSubmit}>
//           <p>SIGNUP FORM</p>
//           <input
//             type="text"
//             name="name"
//             className="input-feild"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Name"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             className="input-feild"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             className="input-feild"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Password"
//             required
//           />
//           <input
//             type="password"
//             name="confirmPassword"
//             className="input-feild"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             placeholder="Confirm Password"
//             required
//           />
//           <input
//             type="tel"
//             name="contactNumber"
//             className="input-feild"
//             value={formData.contactNumber}
//             onChange={handleChange}
//             placeholder="Contact Number"
//             required
//           />
//           <div className='my-buttons'>
//           <button type="submit" onClick={handleBtton}>Already an user?</button>
//           <button type="submit">Signup</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;
