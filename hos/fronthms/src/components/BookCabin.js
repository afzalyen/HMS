// // BookCabin.js
// import React, { useState, useEffect } from 'react';
// import './BookWard.css'; // Importing BookWard.css for consistent styling
// import axios from 'axios';

// function BookCabin() {
//   const [formData, setFormData] = useState({
//     floorNo: '',
//     cabinType: '',
//     cabinNo: '',
//     name: '',
//     email: '',
//     totalDays: '',
//   });

//   const [availableCabins, setAvailableCabins] = useState([]);
//   const [cabinTypes, setCabinTypes] = useState([]);
//   const [cabinNos, setCabinNos] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({ ...formData, [name]: value });

//     if (name === 'floorNo') {
//       const filteredCabins = availableCabins.filter((cabin) => cabin.floor_no === value);
//       setCabinTypes([...new Set(filteredCabins.map((cabin) => cabin.cabin_type))]);
//     }

//     if (name === 'cabinType') {
//       const filteredCabins = availableCabins.filter(
//         (cabin) => cabin.floor_no === formData.floorNo && cabin.cabin_type === value
//       );
//       setCabinNos(filteredCabins.map((cabin) => cabin.cabin_no));
//     }
//   };

//   const fetchAvailableCabins = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/available-cabins/');
//       setAvailableCabins(response.data);
//     } catch (error) {
//       setErrorMessage('Failed to fetch available cabins. Please try again.');
//     }
//   };

//   useEffect(() => {
//     fetchAvailableCabins();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/book-cabin/', formData);
//       setSuccessMessage(response.data.message);
//       setErrorMessage('');
//     } catch (error) {
//       setErrorMessage(error.response.data.detail || 'Failed to book cabin. Please try again.');
//       setSuccessMessage('');
//     }
//   };

//   return (
//     <div className="book-ward-container">
//       <div className="content-wrapper">
//         <h1 className="book-ward-title">Book a Cabin</h1>
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
//               <label>Cabin Type:</label>
//               <select
//                 name="cabinType"
//                 value={formData.cabinType}
//                 onChange={handleChange}
//                 placeholder="Select Cabin Type"
//                 required
//               >
//                 <option value="" disabled>Select Cabin Type</option>
//                 {cabinTypes.map((type) => (
//                   <option key={type} value={type}>
//                     {type}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Cabin No:</label>
//               <select
//                 name="cabinNo"
//                 value={formData.cabinNo}
//                 onChange={handleChange}
//                 placeholder="Select Cabin No"
//                 required
//               >
//                 <option value="" disabled>Select Cabin No</option>
//                 {cabinNos.map((cabinNo) => (
//                   <option key={cabinNo} value={cabinNo}>
//                     {cabinNo}
//                   </option>
//                 ))}
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
//             <button type="submit">Book Cabin</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default BookCabin;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Navbar from './Navbar'; // Ensure Navbar is correctly imported
import './BookCabin.css'; // Custom CSS for BookCabin
import { useNavigate } from 'react-router-dom';
function BookCabin() {
  const [formData, setFormData] = useState({
    floorNo: '',
    cabinType: '',
    cabinNo: '',
    name: '',
    email: '',
    totalDays: '',
    bookedDate: new Date().toISOString().split('T')[0],
  });

  const [availableCabins, setAvailableCabins] = useState([]);
  const [cabinTypes, setCabinTypes] = useState([]);
  const [cabinNos, setCabinNos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const email = localStorage.getItem("patient_email");
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate('/patient-login');
    } else {
      fetchAvailableCabins();
    }
  }, [email, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'floorNo') {
      const filteredCabins = availableCabins.filter(cabin => cabin.floor_no === value);
      const types = new Set(filteredCabins.map(cabin => cabin.cabin_type));
      setCabinTypes([...types]);
    }

    if (name === 'cabinType') {
      const filteredCabins = availableCabins.filter(
        cabin => cabin.floor_no === formData.floorNo && cabin.cabin_type === value
      );
      setCabinNos(filteredCabins.map(cabin => cabin.cabin_no));
    }
  };

  const fetchAvailableCabins = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/available-cabins/');
      setAvailableCabins(response.data);
    } catch (error) {
      setErrorMessage('Failed to fetch available cabins. Please try again.');
    }
  };

  useEffect(() => {
    fetchAvailableCabins();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.totalDays <= 0) {
      setErrorMessage('Total days must be greater than zero.');
      return;
    }
    try {
      await axios.post('http://127.0.0.1:8000/api/book-cabin/', formData);
      setSuccessMessage('Cabin booked successfully!');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response?.data.detail || 'Failed to book cabin. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="book-cabin-container">
      {/* <Navbar /> */}
      <div className="content-wrapper">
        <h1 className="book-cabin-title">Book a Cabin</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit} className="book-cabin-form">
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
              <label>Cabin Type:</label>
              <select
                name="cabinType"
                value={formData.cabinType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Cabin Type</option>
                {cabinTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Cabin No:</label>
              <select
                name="cabinNo"
                value={formData.cabinNo}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Cabin No</option>
                {cabinNos.map((no, index) => (
                  <option key={index} value={no}>{no}</option>
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
            <button type="submit">Book Cabin</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookCabin;
