

// // import React, { useState, useEffect } from 'react';
// // import './DoctorLogin.css';
// // import { Link, useNavigate } from 'react-router-dom';

// // function DoctorLogin() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentDateTime(new Date().toLocaleString());
// //     }, 1000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const doctorData = {
// //       email: email,
// //       password: password
// //     };

// //     fetch("http://127.0.0.1:8000/api/doctor/login/", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(doctorData),
// //     })
// //     .then((response) => {
// //       if (!response.ok) {
// //         return response.json().then(data => {
// //           setError("Invalid Credentials! Please check your email or password and try again.");
// //         });
// //       }
// //       return response.json();
// //     })
// //     .then((data) => {
// //       if (data){
// //         localStorage.setItem("doctor_email", email);
// //         navigate("/doctor-account");
// //       }
// //     })
// //     .catch((error) => {
// //       alert(error);
// //     });
// //   };

// //   return (
// //     <div className="doctor-login-background">
// //       <nav className="doctor-navbar">
// //         <span className="doctor-navbar-brand">Hospital Management Portal</span>
// //         <div className="doctor-nav-items">
// //           <Link to="/">Home</Link>
// //           <Link to="/About">About Us</Link>
// //           <Link to="/support">Support</Link>
// //           <span className="doctor-current-time">{currentDateTime}</span>
// //         </div>
// //       </nav>
// //       <div className="doctor-login-container">
// //         <div className="doctor-login-box">
// //         <h2 style={{ color: '#3B5998' }}>Doctor Login</h2>

// //           {error && <div className="error-message">{error}</div>}
// //           <form onSubmit={handleSubmit}>
// //             <div className="doctor-form-group">
// //               <label>Email Address</label>
// //               <input 
// //                 type="email" 
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)} 
// //                 required 
// //                 className="doctor-form-control" 
// //                 placeholder="Enter your email address"
// //               />
// //             </div>
// //             <div className="doctor-form-group">
// //               <label>Password</label>
// //               <input 
// //                 type="password" 
// //                 value={password} 
// //                 onChange={(e) => setPassword(e.target.value)} 
// //                 required 
// //                 className="doctor-form-control" 
// //                 placeholder="Enter your password"
// //               />
// //             </div>
// //             <button type="submit" className="doctor-btn doctor-btn-primary">Login</button>
// //           </form>
// //           <div className="doctor-signup-option mt-3">
// //             Don't have an account? <Link to="/doctor-signup">Create New Account</Link>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default DoctorLogin;
// import React, { useState, useEffect } from 'react';
// import './DoctorLogin.css';
// import Navbar from './Navbar';
// import { Link, useNavigate,useLocation } from 'react-router-dom';

// function DoctorLogin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     setCurrentDateTime(new Date().toLocaleString());
//   //   }, 1000);
//   //   return () => clearInterval(interval);
//   // }, []);
//   const location = useLocation();
//     const successMessage = location.state ? location.state.successMessage : '';

//     useEffect(() => {
//         if (successMessage) {
//             // If successMessage is present, show it as a success message
//             alert(successMessage);
//         }
//     }, [successMessage]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const doctorData = {
//       email: email,
//       password: password
//     };

//     fetch("http://127.0.0.1:8000/api/doctor/login/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(doctorData),
//     })
//     .then((response) => {
//       if (!response.ok) {
//         return response.json().then(data => {
//           setError("Invalid Credentials! Please check your email or password and try again.");
//         });
//       }
//       return response.json();
//     })
//     .then((data) => {
//       if (data){
//         localStorage.setItem("doctor_email", email);
//         navigate("/doctor-account");
//       }
//     })
//     .catch((error) => {
//       alert(error);
//     });
//   };

//   return (
//     <div className="doctor-login-background">
//      <Navbar  includeHomeLink includeBloodBankLink includeAboutLink/>
//       {/* <nav className="doctor-navbar">
//         <span className="doctor-navbar-brand">Hospital Management Portal</span>
//         <div className="doctor-nav-items">
//           <Link to="/">Home</Link>
//           <Link to="/About">About Us</Link>
//           <Link to="/support">Support</Link>
//           <span className="doctor-current-time">{currentDateTime}</span>
//         </div>
//       </nav> */}
//       <div className="doctor-login-container">
//         <div className="doctor-login-box">
//           <h2 style={{ color: '#3B5998' }}>Doctor Login</h2>

//           {error && <div className="error-message">{error}</div>}
//           <form onSubmit={handleSubmit}>
//             <div className="doctor-form-group">
//               <label>Email Address</label>
//               <input 
//                 type="email" 
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)} 
//                 required 
//                 className="doctor-form-control" 
//                 placeholder="Enter your email address"
//               />
//             </div>
//             <div className="doctor-form-group">
//               <label>Password</label>
//               <input 
//                 type="password" 
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)} 
//                 required 
//                 className="doctor-form-control" 
//                 placeholder="Enter your password"
//               />
//             </div>
//             <button type="submit" className="doctor-btn doctor-btn-primary">Login</button>
//           </form>
//           <div className="doctor-signup-option mt-3">
//             Don't have an account? <Link to="/doctor-signup">Create New Account</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DoctorLogin;
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './DoctorLogin.css'; // Ensure this CSS file is imported
// import Navbar from './Navbar'; // Replace with your actual Navbar component path

// function DoctorLogin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true); // Start loading animation
//     setError('');

//     const doctorData = {
//       email,
//       password,
//     };

//     // Replace with your actual API endpoint
//     fetch("http://127.0.0.1:8000/api/doctor/login/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(doctorData),
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Invalid Credentials');
//       }
//       return response.json();
//     })
//     .then(data => {
//       localStorage.setItem("doctor_email", data.email);
//       setTimeout(() => {
//         setLoading(false);
//         navigate("/doctor-account"); // Replace with your actual route
//       }, 3000);
//     })
//     .catch(error => {
//       setLoading(false);
//       setError(error.message);
//     });
//   };

//   return (
//     <div className="doctor-login-background">
//       <Navbar includeHomeLink includeBloodBankLink includeAboutLink />
//       <div className="doctor-login-container">
//         <div className="doctor-login-box">
//           <h2 style={{ color: '#3B5998' }}>Doctor Login</h2>
//           {error && <div className="error-message">{error}</div>}
//           <form onSubmit={handleSubmit}>
//             <div className="doctor-form-group">
//               <label>Email Address</label>
//               <input 
//                 type="email" 
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)} 
//                 required 
//                 className="doctor-form-control" 
//                 placeholder="Enter your email address"
//               />
//             </div>
//             <div className="doctor-form-group">
//               <label>Password</label>
//               <input 
//                 type="password" 
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)} 
//                 required 
//                 className="doctor-form-control" 
//                 placeholder="Enter your password"
//               />
//             </div>
//             <button type="submit" className="doctor-btn doctor-btn-primary">Login</button>
//           </form>
//           {loading && (
//             <div className="heartbeat-loader">
//               <div className="heartbeat-line"></div>
//               <div className="heartbeat-line"></div>
//               <div className="heartbeat-line"></div>
//               <div className="heartbeat-line"></div>
//               <div className="heartbeat-line"></div>
//               {/* Add more lines here if desired */}
//             </div>
//           )}
//           <div className="doctor-signup-option mt-3">
//             Don't have an account? <Link to="/doctor-signup">Create New Account</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DoctorLogin;
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './DoctorLogin.css'; // Ensure this CSS file is imported
import Navbar from './Navbar';

function DoctorLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading animation
    setError('');

    // Replace with your actual API endpoint
    fetch("http://127.0.0.1:8000/api/doctor/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Invalid Credentials');
      }
      return response.json();
    })
    .then(data => {
      localStorage.setItem("doctor_email", email);
      // Redirect after a delay to show loading
      setTimeout(() => {
        setLoading(false);
        navigate("/doctor-account");
      }, 1500); // Delay for 2 seconds to show the heartbeat animation
    })
    .catch(error => {
      setLoading(false);
      setError("Invalid Credentials! Please check your email or password and try again.");
    });
  };

  return (
    <div className="doctor-login-background">
        <Navbar  includeHomeLink includeBloodBankLink includeAboutLink includeSupportLink/>
      {/* Assuming you have a Navbar component */}
      {/* <Navbar includeHomeLink includeBloodBankLink includeAboutLink /> */}
      <div className="doctor-login-container">
        <div className="doctor-login-box">
          <h2>Doctor Login</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            {/* Email input */}
            <div className="doctor-form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required 
                className="doctor-form-control" 
                placeholder="Enter your email address"
              />
            </div>
            {/* Password input */}
            <div className="doctor-form-group">
              <label>Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                className="doctor-form-control" 
                placeholder="Enter your password"
              />
            </div>
            {/* Submit button */}
            <button type="submit" className="doctor-btn doctor-btn-primary">Login</button>
          </form>
          {/* Loading animation */}
          {loading && (
            <div className="ekg-loader">
              <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
                {/* This path is simplified and needs to be adjusted to match your real EKG data */}
                <path d="M0 20 l10 10 l10 -20 l10 20 l10 -10 l20 0 l10 -10 l10 10 l10 -20 l10 20 l10 -10 l10 0"
                      fill="none" stroke="black" strokeWidth="1">
                  <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="1s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>
          )}
          {/* Sign-up option */}
          <div className="doctor-signup-option mt-3">
            Don't have an account? <Link to="/doctor-signup">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorLogin;
