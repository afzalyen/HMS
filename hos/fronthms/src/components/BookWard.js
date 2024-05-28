
// first one
// BookWard.js
// import React, { useState, useEffect } from 'react';
// import './BookWard.css';
// import axios from 'axios';

// function BookWard() {
//   const [formData, setFormData] = useState({
//     wardNo: '',
//     floorNo: '',
//     wardType: '',
//     totalDays: '',
//     name: '',
//     email: '',
//   });

//   const [availableWards, setAvailableWards] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const fetchAvailableWards = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/available-wards/');
//       setAvailableWards(response.data);
//     } catch (error) {
//       setErrorMessage('Failed to fetch available wards. Please try again.');
//     }
//   };

//   useEffect(() => {
//     fetchAvailableWards();
//   }, []); // Fetch available wards on component mount

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/book-ward/', formData);
//       setSuccessMessage(response.data.message);
//       setErrorMessage('');
//     } catch (error) {
//       setErrorMessage(error.response.data.detail || 'Failed to book ward. Please try again.');
//       setSuccessMessage('');
//     }
//   };

//   return (
//     <div className="book-ward-container">
//       <div className="content-wrapper">
//         <h1 className="book-ward-title">Book a Ward</h1>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         {successMessage && <p className="success-message">{successMessage}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Ward No:</label>
//             <select
//               name="wardNo"
//               value={formData.wardNo}
//               onChange={handleChange}
//               required
//             >
//               <option value="" disabled>Select Ward</option>
//               {availableWards.map(ward => (
//                 <option key={ward.ward_no} value={ward.ward_no}>
//                   {ward.ward_no}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="form-group">
//             <label>Floor No:</label>
//             <input
//               type="text"
//               name="floorNo"
//               value={formData.floorNo}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Ward Type:</label>
//             <input
//               type="text"
//               name="wardType"
//               value={formData.wardType}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Total Days:</label>
//             <input
//               type="number"
//               name="totalDays"
//               value={formData.totalDays}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <button type="submit">Book Ward</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default BookWard;



// 2nd one
// import React, { useState, useEffect } from 'react';
// import './BookWard.css';
// import axios from 'axios';

// function BookWard() {
//   const [formData, setFormData] = useState({
//     wardNo: '',
//     floorNo: '',
//     wardType: '',
//     totalDays: '',
//     name: '',
//     email: '',
//   });

//   const [availableWards, setAvailableWards] = useState([]);
//   const [floors, setFloors] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({ ...formData, [name]: value });

//     if (name === 'floorNo') {
//       // Filter available wards based on the selected floor
//       const filteredWards = availableWards.filter((ward) => ward.floor_no === value);
//       setFloors(filteredWards.map((ward) => ward.ward_no));
//     }
//   };

//   const fetchAvailableWards = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/available-wards/');
//       setAvailableWards(response.data);
//       // Set initial floor options
//       setFloors(response.data.map((ward) => ward.floor_no));
//     } catch (error) {
//       setErrorMessage('Failed to fetch available wards. Please try again.');
//     }
//   };

//   useEffect(() => {
//     fetchAvailableWards();
//   }, []); // Fetch available wards on component mount

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/book-ward/', formData);
//       setSuccessMessage(response.data.message);
//       setErrorMessage('');
//     } catch (error) {
//       setErrorMessage(error.response.data.detail || 'Failed to book ward. Please try again.');
//       setSuccessMessage('');
//     }
//   };

//   // Utilizing 'floors' in a simple console.log statement to avoid no-unused-vars warning
//   console.log(floors);

//   return (
//     <div className="book-ward-container">
//       <div className="content-wrapper">
//         <h1 className="book-ward-title">Book a Ward</h1>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         {successMessage && <p className="success-message">{successMessage}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Floor No:</label>
//             <input
//               type="text"
//               name="floorNo"
//               value={formData.floorNo}
//               onChange={handleChange}
//               placeholder="Enter Floor"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Ward Type:</label>
//             <input
//               type="text"
//               name="wardType"
//               value={formData.wardType}
//               onChange={handleChange}
//               placeholder="Enter Ward Type"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Ward No:</label>
//             <select name="wardNo" value={formData.wardNo} onChange={handleChange} required>
//               <option value="" disabled>Select Ward</option>
//               {availableWards
//                 .filter((ward) => ward.floor_no === formData.floorNo && ward.ward_type === formData.wardType)
//                 .map((ward) => (
//                   <option key={ward.ward_no} value={ward.ward_no}>
//                     {ward.ward_no}
//                   </option>
//                 ))}
//             </select>
//           </div>
//           {/* Remaining form fields */}
//           <div className="form-group">
//             <button type="submit">Book Ward</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default BookWard;



// import React, { useState, useEffect } from 'react';
// import './BookWard.css';
// import axios from 'axios';

// function BookWard() {
//   const [formData, setFormData] = useState({
//     wardNo: '',
//     floorNo: '',
//     wardType: '',
//     totalDays: '',
//     name: '',
//     email: '',
//   });

//   const [availableWards, setAvailableWards] = useState([]);
//   const [floors, setFloors] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({ ...formData, [name]: value });

//     if (name === 'floorNo') {
//       const filteredWards = availableWards.filter((ward) => ward.floor_no === value);
//       setFloors(filteredWards.map((ward) => ward.ward_no));
//     }
//   };

//   const fetchAvailableWards = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/available-wards/');
//       setAvailableWards(response.data);
//       setFloors(response.data.map((ward) => ward.floor_no));
//     } catch (error) {
//       setErrorMessage('Failed to fetch available wards. Please try again.');
//     }
//   };

//   useEffect(() => {
//     fetchAvailableWards();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/book-ward/', formData);
//       setSuccessMessage(response.data.message);
//       setErrorMessage('');
//     } catch (error) {
//       setErrorMessage(error.response.data.detail || 'Failed to book ward. Please try again.');
//       setSuccessMessage('');
//     }
//   };

//   console.log(floors);

//   return (
//     <div className="book-ward-container">
//       <div className="content-wrapper">
//         <h1 className="book-ward-title">Book a Ward</h1>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         {successMessage && <p className="success-message">{successMessage}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Floor No:</label>
//             <input
//               type="text"
//               name="floorNo"
//               value={formData.floorNo}
//               onChange={handleChange}
//               placeholder="Enter Floor"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Ward Type:</label>
//             <input
//               type="text"
//               name="wardType"
//               value={formData.wardType}
//               onChange={handleChange}
//               placeholder="Enter Ward Type"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Ward No:</label>
//             <select name="wardNo" value={formData.wardNo} onChange={handleChange} required>
//               <option value="" disabled>Select Ward</option>
//               {availableWards
//                 .filter((ward) => ward.floor_no === formData.floorNo && ward.ward_type === formData.wardType)
//                 .map((ward) => (
//                   <option key={ward.ward_no} value={ward.ward_no}>
//                     {ward.ward_no}
//                   </option>
//                 ))}
//             </select>
//           </div>
//           <div className="form-group">
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter Name"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter Email"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Total Days:</label>
//             <input
//               type="number"
//               name="totalDays"
//               value={formData.totalDays}
//               onChange={handleChange}
//               placeholder="Enter Total Days"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <button type="submit">Book Ward</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default BookWard;
// BookWard.js
// BookWard.js
// BookWard.js
// import React, { useState, useEffect } from 'react';
// import './BookWard.css';
// import axios from 'axios';

// function BookWard() {
//   const [formData, setFormData] = useState({
//     floorNo: '',
//     wardType: '',
//     wardNo: '',
//     name: '',
//     email: '',
//     totalDays: '',
//   });

//   const [availableWards, setAvailableWards] = useState([]);
//   // Remove the 'floors' state since it's not being used
//   // const [floors, setFloors] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({ ...formData, [name]: value });

//     if (name === 'floorNo') {
//       // Remove the unused variable 'filteredWards'
//       // const filteredWards = availableWards.filter((ward) => ward.floor_no === value);
//       // setFloors(filteredWards.map((ward) => ward.ward_no));
//     }
//   };

//   const fetchAvailableWards = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/available-wards/');
//       setAvailableWards(response.data);
//       // Remove the 'floors' state update since it's not being used
//       // setFloors(response.data.map((ward) => ward.floor_no));
//     } catch (error) {
//       setErrorMessage('Failed to fetch available wards. Please try again.');
//     }
//   };

//   useEffect(() => {
//     fetchAvailableWards();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://127.0.0.1:8000/api/book-ward/', formData);
//       setSuccessMessage('Ward booked successfully!');
//       setErrorMessage('');
//     } catch (error) {
//       setErrorMessage(error.response?.data.detail || 'Failed to book ward. Please try again.');
//       setSuccessMessage('');
//     }
//   };

//   return (
//     <div className="book-ward-container">
//       <div className="content-wrapper">
//         <h1 className="book-ward-title">Book a Ward</h1>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         {successMessage && <p className="success-message">{successMessage}</p>}
//         <form onSubmit={handleSubmit} className="book-ward-form">
//           <div className="form-row">
//             <div className="form-group">
//               <label>Floor No:</label>
//               <input
//                 type="text"
//                 name="floorNo"
//                 value={formData.floorNo}
//                 onChange={handleChange}
//                 placeholder="Enter Floor"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Ward Type:</label>
//               <input
//                 type="text"
//                 name="wardType"
//                 value={formData.wardType}
//                 onChange={handleChange}
//                 placeholder="Enter Ward Type"
//                 required
//               />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Ward No:</label>
//               <select name="wardNo" value={formData.wardNo} onChange={handleChange} required>
//                 <option value="" disabled>Select Ward</option>
//                 {availableWards
//                   .filter((ward) => ward.floor_no === formData.floorNo && ward.ward_type === formData.wardType)
//                   .map((ward) => (
//                     <option key={ward.ward_no} value={ward.ward_no}>
//                       {ward.ward_no}
//                     </option>
//                   ))}
//               </select>
//             </div>
//             <div className="form-group">
//               <label>Total Days:</label>
//               <input
//                 type="number"
//                 name="totalDays"
//                 value={formData.totalDays}
//                 onChange={handleChange}
//                 placeholder="Enter Total Days"
//                 required
//               />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter Name"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter Email"
//                 required
//               />
//             </div>
//           </div>
//           <div className="form-group">
//             <button type="submit">Book Ward</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default BookWard;
// 19/11
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './BookWard.css'; // Ensure this path is correct

// function BookWard() {
//   const [formData, setFormData] = useState({
//     floorNo: '',
//     wardType: '',
//     wardNo: '',
//     name: '',
//     email: '',
//     totalDays: '',
//     bookedDate: new Date().toISOString().split('T')[0],
//   });

//   const [availableWards, setAvailableWards] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'totalDays' && parseInt(value, 10) < 0) {
//       setErrorMessage('Total days cannot be negative.');
//       return;
//     } else {
//       setErrorMessage(''); // Clear error message
//     }
//     setFormData({ ...formData, [name]: value });
//   };

//   const fetchAvailableWards = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/available-wards/');
//       setAvailableWards(response.data);
//     } catch (error) {
//       setErrorMessage('Failed to fetch available wards. Please try again.');
//     }
//   };

//   useEffect(() => {
//     fetchAvailableWards();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.totalDays <= 0) {
//       setErrorMessage('Total days must be greater than zero.');
//       return;
//     }
//     try {
//       const postData = { ...formData };
//       await axios.post('http://127.0.0.1:8000/api/book-ward/', postData);
//       setSuccessMessage('Ward booked successfully!');
//       setErrorMessage('');
//     } catch (error) {
//       setErrorMessage(error.response?.data.detail || 'Failed to book ward. Please try again.');
//       setSuccessMessage('');
//     }
//   };

//   return (
//     <div className="book-ward-container">
//       <div className="content-wrapper">
//         <h1 className="book-ward-title">Book a Ward</h1>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         {successMessage && <p className="success-message">{successMessage}</p>}
//         <form onSubmit={handleSubmit} className="book-ward-form">
//           <div className="form-row">
//             <div className="form-group">
//               <label>Floor No:</label>
//               <input
//                 type="text"
//                 name="floorNo"
//                 value={formData.floorNo}
//                 onChange={handleChange}
//                 placeholder="Enter Floor"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Ward Type:</label>
//               <input
//                 type="text"
//                 name="wardType"
//                 value={formData.wardType}
//                 onChange={handleChange}
//                 placeholder="Enter Ward Type"
//                 required
//               />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Ward No:</label>
//               <select name="wardNo" value={formData.wardNo} onChange={handleChange} required>
//                 <option value="" disabled>Select Ward</option>
//                 {availableWards
//                   .filter((ward) => ward.floor_no === formData.floorNo && ward.ward_type === formData.wardType)
//                   .map((ward) => (
//                     <option key={ward.ward_no} value={ward.ward_no}>
//                       {ward.ward_no}
//                     </option>
//                   ))}
//               </select>
//             </div>
//             <div className="form-group">
//               <label>Total Days:</label>
//               <input
//                 type="number"
//                 name="totalDays"
//                 value={formData.totalDays}
//                 onChange={handleChange}
//                 placeholder="Enter Total Days"
//                 required
//               />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter Name"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter Email"
//                 required
//               />
//             </div>
//           </div>
//           <div className="form-group">
//             <label>Booked Date:</label>
//             <input
//               type="date"
//               name="bookedDate"
//               value={formData.bookedDate}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <button type="submit" className="book-ward-button">Book Ward</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default BookWard;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './BookWard.css';

// function BookWard() {
//   const [formData, setFormData] = useState({
//     floorNo: '',
//     wardType: '',
//     wardNo: '',
//     name: '',
//     email: '',
//     totalDays: '',
//     bookedDate: new Date().toISOString().split('T')[0],
//   });

//   const [availableWards, setAvailableWards] = useState([]);
//   const [wardTypes, setWardTypes] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     if (name === 'floorNo') {
//       const filteredWards = availableWards.filter(ward => ward.floor_no === value);
//       const types = new Set(filteredWards.map(ward => ward.ward_type));
//       setWardTypes(Array.from(types));
//     }
//   };

//   const fetchAvailableWards = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/available-wards/');
//       setAvailableWards(response.data);
//     } catch (error) {
//       setErrorMessage('Failed to fetch available wards. Please try again.');
//     }
//   };

//   useEffect(() => {
//     fetchAvailableWards();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.totalDays <= 0) {
//       setErrorMessage('Total days must be greater than zero.');
//       return;
//     }
//     try {
//       await axios.post('http://127.0.0.1:8000/api/book-ward/', formData);
//       setSuccessMessage('Ward booked successfully!');
//       setErrorMessage('');
//     } catch (error) {
//       setErrorMessage(error.response?.data.detail || 'Failed to book ward. Please try again.');
//       setSuccessMessage('');
//     }
//   };
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './BookWard.css';

function BookWard() {
  const [formData, setFormData] = useState({
    floorNo: '',
    wardType: '',
    wardNo: '',
    name: '',
    email: '',
    totalDays: '',
    bookedDate: new Date().toISOString().split('T')[0],
  });

  const [availableWards, setAvailableWards] = useState([]);
  const [wardTypes, setWardTypes] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const email = localStorage.getItem("patient_email");
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate('/patient-login');
    } else {
      fetchAvailableWards();
    }
  }, [email, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'floorNo') {
      const filteredWards = availableWards.filter(ward => ward.floor_no === value);
      const types = new Set(filteredWards.map(ward => ward.ward_type));
      setWardTypes(Array.from(types));
    }
  };

  const fetchAvailableWards = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/available-wards/');
      setAvailableWards(response.data);
    } catch (error) {
      setErrorMessage('Failed to fetch available wards. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.totalDays <= 0) {
      setErrorMessage('Total days must be greater than zero.');
      return;
    }
    try {
      await axios.post('http://127.0.0.1:8000/api/book-ward/', formData);
      setSuccessMessage('Ward booked successfully!');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response?.data.detail || 'Failed to book ward. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
  
    <div className="book-ward-page">
      <div className="book-ward-container">
        <div className="content-wrapper">
          <h1 className="book-ward-title">Book a Ward</h1>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <form onSubmit={handleSubmit} className="book-ward-form">
            <div className="form-row">
              <div className="form-group">
                <label>Floor No:</label>
                <input
                  type="text"
                  name="floorNo"
                  value={formData.floorNo}
                  onChange={handleChange}
                  placeholder="Enter Floor"
                  required
                />
              </div>
              <div className="form-group">
                <label>Ward Type:</label>
                <select
                  name="wardType"
                  value={formData.wardType}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select Ward Type</option>
                  {wardTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Ward No:</label>
                <select
                  name="wardNo"
                  value={formData.wardNo}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select Ward</option>
                  {availableWards
                    .filter(ward => ward.floor_no === formData.floorNo && ward.ward_type === formData.wardType)
                    .map(ward => (
                      <option key={ward.ward_no} value={ward.ward_no}>{ward.ward_no}</option>
                    ))}
                </select>
              </div>
              <div className="form-group">
                <label>Total Days:</label>
                <input
                  type="number"
                  name="totalDays"
                  value={formData.totalDays}
                  onChange={handleChange}
                  placeholder="Enter Total Days"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Booked Date:</label>
              <input
                type="date"
                name="bookedDate"
                value={formData.bookedDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" className="book-ward-button">Book Ward</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookWard;
