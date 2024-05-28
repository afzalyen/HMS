// // import React, { useState } from 'react';
// // import { downloadPDF } from './pdfGenerator'; // adjust the path to where your pdfGenerator.js file is located

// // function AddPrescription() {
// //   const [patientName, setPatientName] = useState('');
// //   const [patientNumber, setPatientNumber] = useState('');
// //   const [patientEmail, setPatientEmail] = useState('');
// //   const [description, setDescription] = useState('');

// //   const handleSubmit = () => {
// //     // Call API to send prescription via email
// //     // or Download it as PDF
// //   };

// //   return (
// //     <div>
// //       <h2>Add Prescription</h2>
// //       <form onSubmit={handleSubmit}>
// //         <input 
// //           placeholder="Patient Name" 
// //           value={patientName} 
// //           onChange={(e) => setPatientName(e.target.value)}
// //         />
// //         <input 
// //           placeholder="Patient Number" 
// //           value={patientNumber} 
// //           onChange={(e) => setPatientNumber(e.target.value)}
// //         />
// //         <input 
// //           placeholder="Patient Email" 
// //           value={patientEmail} 
// //           onChange={(e) => setPatientEmail(e.target.value)}
// //         />
// //         <textarea 
// //           placeholder="Write Prescription" 
// //           value={description} 
// //           onChange={(e) => setDescription(e.target.value)}
// //         />
// //         <button type="submit">Send Prescription via Email</button>
// //       </form>
// //       <button onClick={() => downloadPDF(patientName, patientNumber, patientEmail, description)}>Download Prescription</button>

// //     </div>
// //   );
// // }

// // export default AddPrescription;
// import React, { useState } from 'react';
// import { downloadPDF } from './pdfGenerator'; // Ensure this path is correct
// import './AddPrescription.css'; // Importing the CSS file

// function AddPrescription() {
//   // State variables for patient's details and prescription description
//   const [doctorName, setDoctorName] = useState('');
//   const [doctorEmail, setDoctorEmail] = useState('');
//   const [patientName, setPatientName] = useState('');
//   const [patientNumber, setPatientNumber] = useState('');
//   const [patientEmail, setPatientEmail] = useState('');
//   const [description, setDescription] = useState('');
//   const [age, setAge] = useState('');
//   const [sex, setSex] = useState('Male'); // Default to Male
//   const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // Default to today's date

//   // Function to handle the form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Call API to send prescription via email
//     // or Download it as PDF (based on your implementation)
//   };

//   return (
//     <div className="prescription-form-container">
//       <h2>Add Prescription</h2>
//       <form onSubmit={handleSubmit} className="prescription-form">
          
//       <label>
//           Doctor Name
//           <input 
//             className="input-field"
//             placeholder="Enter Doctor name" 
//             value={patientName} 
//             onChange={(e) => setDoctorName(e.target.value)}
//           />
//       </label>
        
//       <label>
//           Docotor Email
//           <input 
//             className="input-field"
//             placeholder="Enter Doctor email" 
//             value={patientEmail} 
//             onChange={(e) => setDoctorEmail(e.target.value)}
//           />
//         </label>
//       <label>
//           Patient Name
//           <input 
//             className="input-field"
//             placeholder="Enter patient name" 
//             value={patientName} 
//             onChange={(e) => setPatientName(e.target.value)}
//           />
//         </label>
//         <label>
//           Age
//           <input 
//             className="input-field"
//             placeholder="Enter age"
//             type="number"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//           />
//         </label>
//         <label>
//           Sex
//           <select 
//             className="input-field"
//             value={sex}
//             onChange={(e) => setSex(e.target.value)}
//           >
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//         </label>
//         <label>
//           Date
//           <input 
//             className="input-field"
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </label>
//         <label>
//           Patient Number
//           <input 
//             className="input-field"
//             placeholder="Enter patient number" 
//             value={patientNumber} 
//             onChange={(e) => setPatientNumber(e.target.value)}
//           />
//         </label>
//         <label>
//           Patient Email
//           <input 
//             className="input-field"
//             placeholder="Enter patient email" 
//             value={patientEmail} 
//             onChange={(e) => setPatientEmail(e.target.value)}
//           />
//         </label>
//         <label>
//           Write Prescription
//           <textarea 
//             className="textarea-field"
//             placeholder="Write the prescription here" 
//             value={description} 
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </label>
//         <button type="submit" className="submit-button">Send Prescription via Email</button>
//       </form>
//       <button onClick={() => downloadPDF(doctorName,doctorEmail,patientName, patientNumber, patientEmail, description, age, sex, date)} className="download-button">Download Prescription</button>
//     </div>
//   );
// }

// export default AddPrescription;


// import React, { useState } from 'react';
// import axios from 'axios'; // Ensure you've installed axios using 'npm install axios'
// import { downloadPDF } from './pdfGenerator'; // Ensure the path is correct
// import './AddPrescription.css'; // Importing the CSS file


// function AddPrescription() {
//   const [doctorName, setDoctorName] = useState('');
//   const [doctorEmail, setDoctorEmail] = useState('');
//   const [patientName, setPatientName] = useState('');
//   const [patientNumber, setPatientNumber] = useState('');
//   const [patientEmail, setPatientEmail] = useState('');
//   const [description, setDescription] = useState('');
//   const [age, setAge] = useState('');
//   const [sex, setSex] = useState('Male');
//   const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const prescriptionData = {
//       doctor: doctorName,
//       doctor_email: doctorEmail,
//       patient_name: patientName,
//       patient_number: patientNumber,
//       patient_email: patientEmail,
//       description: description,
//       age: age,
//       sex: sex,
//       date: date
//     };

//     try {
//       const response = await axios.post('http://localhost:8000/api/prescription/', prescriptionData);
//       if (response.status === 201) {
//         alert("Prescription saved successfully");
//         window.location.href = '/doctor-account';  // Redirect to DoctorAccount
//       } else {
//         alert("There was an error saving the prescription");
//       }
//     } catch (error) {
//       console.error("Error saving prescription:", error);
//       alert("Error saving prescription");
//     }
// };

//     return (
//     <div className="prescription-form-container">
//       <h2>Add Prescription</h2>
//       <form onSubmit={handleSubmit} className="prescription-form">
          
//       <label>
//           Doctor Name
//           <input 
//             className="input-field"
//             placeholder="Enter Doctor name" 
//             value={doctorName} 
//             onChange={(e) => setDoctorName(e.target.value)}
//           />
//       </label>
        
//       <label>
//           Docotor Email
//           <input 
//             className="input-field"
//             placeholder="Enter Doctor email" 
//             value={doctorEmail} 
//             onChange={(e) => setDoctorEmail(e.target.value)}
//           />
//         </label>
//       <label>
//           Patient Name
//           <input 
//             className="input-field"
//             placeholder="Enter patient name" 
//             value={patientName} 
//             onChange={(e) => setPatientName(e.target.value)}
//           />
//         </label>
//         <label>
//           Age
//           <input 
//             className="input-field"
//             placeholder="Enter age"
//             type="number"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//           />
//         </label>
//         <label>
//           Sex
//           <select 
//             className="input-field"
//             value={sex}
//             onChange={(e) => setSex(e.target.value)}
//           >
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//         </label>
//         <label>
//           Date
//           <input 
//             className="input-field"
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </label>
//         <label>
//           Patient Number
//           <input 
//             className="input-field"
//             placeholder="Enter patient number" 
//             value={patientNumber} 
//             onChange={(e) => setPatientNumber(e.target.value)}
//           />
//         </label>
//         <label>
//           Patient Email
//           <input 
//             className="input-field"
//             placeholder="Enter patient email" 
//             value={patientEmail} 
//             onChange={(e) => setPatientEmail(e.target.value)}
//           />
//         </label>
//         <label>
//           Write Prescription
//           <textarea 
//             className="textarea-field"
//             placeholder="Write the prescription here" 
//             value={description} 
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </label>
//         <button type="submit" className="submit-button">Send Prescription via Email</button>
//       </form>
//       <button onClick={() => downloadPDF(doctorName,doctorEmail,patientName, patientNumber, patientEmail, description, age, sex, date)} className="download-button">Download Prescription</button>
//     </div>
//   );
// }

// export default AddPrescription;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { downloadPDF } from './pdfGenerator'; // Ensure this path is correct
// import './AddPrescription.css'; // Importing the CSS file

// function AddPrescription() {
//   const [doctorName, setDoctorName] = useState('');
//   const [doctorEmail, setDoctorEmail] = useState('');
//   const [patientName, setPatientName] = useState('');
//   const [patientNumber, setPatientNumber] = useState('');
//   const [patientEmail, setPatientEmail] = useState('');
//   const [description, setDescription] = useState('');
//   const [age, setAge] = useState('');
//   const [sex, setSex] = useState('Male');
//   const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const prescriptionData = {
//       doctor_name: doctorName,
//       doctor_email: doctorEmail,
//       patient_name: patientName,
//       patient_number: patientNumber,
//       patient_email: patientEmail,
//       description: description,
//       age: age,
//       sex: sex,
//       date: date
//     };

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/prescriptions/', prescriptionData);
//       if (response.status === 201) {
//         alert("Prescription saved successfully");
//         // Consider redirecting or resetting form here
//       } else {
//         alert("There was an error saving the prescription");
//       }
//     } catch (error) {
//       console.error("Error saving prescription:", error);
//       alert("Error saving prescription");
//     }
//   };

//   const handleDownloadPDF = () => {
//     downloadPDF(doctorName, doctorEmail, patientName, patientNumber, patientEmail, description, age, sex, date);
//   };

//   return (
//     <div className="prescription-form-container">
//       <h2>Add Prescription</h2>
//       <form onSubmit={handleSubmit} className="prescription-form">
//         <label>
//           Doctor Name
//           <input 
//             className="input-field"
//             placeholder="Enter Doctor name" 
//             value={doctorName} 
//             onChange={(e) => setDoctorName(e.target.value)}
//           />
//         </label>
//         <label>
//           Doctor Email
//           <input 
//             className="input-field"
//             placeholder="Enter Doctor email" 
//             value={doctorEmail} 
//             onChange={(e) => setDoctorEmail(e.target.value)}
//           />
//         </label>
//         <label>
//           Patient Name
//           <input 
//             className="input-field"
//             placeholder="Enter patient name" 
//             value={patientName} 
//             onChange={(e) => setPatientName(e.target.value)}
//           />
//         </label>
//         <label>
//           Age
//           <input 
//             className="input-field"
//             placeholder="Enter age"
//             type="number"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//           />
//         </label>
//         <label>
//           Sex
//           <select 
//             className="input-field"
//             value={sex}
//             onChange={(e) => setSex(e.target.value)}
//           >
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//         </label>
//         <label>
//           Date
//           <input 
//             className="input-field"
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </label>
//         <label>
//           Patient Number
//           <input 
//             className="input-field"
//             placeholder="Enter patient number" 
//             value={patientNumber} 
//             onChange={(e) => setPatientNumber(e.target.value)}
//           />
//         </label>
//         <label>
//           Patient Email
//           <input 
//             className="input-field"
//             placeholder="Enter patient email" 
//             value={patientEmail} 
//             onChange={(e) => setPatientEmail(e.target.value)}
//           />
//         </label>
//         <label>
//           Write Prescription
//           <textarea 
//             className="textarea-field"
//             placeholder="Write the prescription here" 
//             value={description} 
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </label>
//         <button type="submit" className="submit-button">Send Prescription</button>
//       </form>
//       <button onClick={handleDownloadPDF} className="download-button">Download Prescription</button>
//     </div>
//   );
// }

// export default AddPrescription;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { downloadPDF } from './pdfGenerator'; // Ensure this path is correct
// import './AddPrescription.css'; // Importing the CSS file

// function AddPrescription() {
//   const [doctorName, setDoctorName] = useState('');
//   const [doctorEmail, setDoctorEmail] = useState('');
//   const [patientName, setPatientName] = useState('');
//   const [patientNumber, setPatientNumber] = useState('');
//   const [patientEmail, setPatientEmail] = useState('');
//   const [description, setDescription] = useState('');
//   const [age, setAge] = useState('');
//   const [sex, setSex] = useState('Male');
//   const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const prescriptionData = {
//       doctor_name: doctorName,
//       doctor_email: doctorEmail,
//       patient_name: patientName,
//       patient_number: patientNumber,
//       patient_email: patientEmail,
//       description: description,
//       age: age,
//       sex: sex,
//       date: date
//     };

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/prescriptions/', prescriptionData);
//       if (response.status === 201) {
//         alert("Prescription saved successfully");
//         // Consider redirecting or resetting form here
//       } else {
//         alert("There was an error saving the prescription");
//       }
//     } catch (error) {
//       console.error("Error saving prescription:", error);
//       alert("Error saving prescription");
//     }
//   };

//   const handleDownloadPDF = () => {
//     downloadPDF(doctorName, doctorEmail, patientName, patientNumber, patientEmail, description, age, sex, date);
//   };

//   return (
//     <div className="prescription-container">
//       <nav className="navbar">
//         <span className="navbar-brand">Hospital Management Portal</span>
//         <div className="nav-items">
//           <span className="current-time">{new Date().toLocaleString()}</span>
//         </div>
//       </nav>
//       <div className="prescription-form-container">
//         <h2 className="form-title">Prescription Form</h2>
//         <form onSubmit={handleSubmit} className="prescription-form">
//           <div className="form-row">
//             <div className="form-col">
//               <label>
//                 Doctor Name
//                 <input 
//                   className="input-field"
//                   placeholder="Enter Doctor name" 
//                   value={doctorName} 
//                   onChange={(e) => setDoctorName(e.target.value)}
//                 />
//               </label>
//               <label>
//                 Doctor Email
//                 <input 
//                   className="input-field"
//                   placeholder="Enter Doctor email" 
//                   value={doctorEmail} 
//                   onChange={(e) => setDoctorEmail(e.target.value)}
//                 />
//               </label>
//               <label>
//                 Patient Name
//                 <input 
//                   className="input-field"
//                   placeholder="Enter patient name" 
//                   value={patientName} 
//                   onChange={(e) => setPatientName(e.target.value)}
//                 />
//               </label>
//             </div>
//             <div className="form-col">
//               <label>
//                 Age
//                 <input 
//                   className="input-field"
//                   placeholder="Enter age"
//                   type="number"
//                   value={age}
//                   onChange={(e) => setAge(e.target.value)}
//                 />
//               </label>
//               <label>
//                 Sex
//                 <select 
//                   className="input-field"
//                   value={sex}
//                   onChange={(e) => setSex(e.target.value)}
//                 >
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </label>
//               <label>
//                 Date
//                 <input 
//                   className="input-field"
//                   type="date"
//                   value={date}
//                   onChange={(e) => setDate(e.target.value)}
//                 />
//               </label>
//             </div>
//           </div>
//           <div className="form-row">
//             <label>
//               Patient Number
//               <input 
//                 className="input-field"
//                 placeholder="Enter patient number" 
//                 value={patientNumber} 
//                 onChange={(e) => setPatientNumber(e.target.value)}
//               />
//             </label>
//             <label>
//               Patient Email
//               <input 
//                 className="input-field"
//                 placeholder="Enter patient email" 
//                 value={patientEmail} 
//                 onChange={(e) => setPatientEmail(e.target.value)}
//               />
//             </label>
//           </div>
//           <label>
//             Write Prescription
//             <textarea 
//               className="textarea-field"
//               placeholder="Write the prescription here" 
//               value={description} 
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </label>
//           <button type="submit" className="submit-button">Send Prescription</button>
//         </form>
//         <button onClick={handleDownloadPDF} className="download-button">Download Prescription</button>
//       </div>
//     </div>
//   );
// }

// export default AddPrescription;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { downloadPDF } from './pdfGenerator'; // Ensure this path is correct
// import Navbar from './Navbar'; // Importing the Navbar component
// import './AddPrescription.css'; // Importing the CSS file

// function AddPrescription() {
//   const [doctorName, setDoctorName] = useState('');
//   const [doctorEmail, setDoctorEmail] = useState('');
//   const [patientName, setPatientName] = useState('');
//   const [patientNumber, setPatientNumber] = useState('');
//   const [patientEmail, setPatientEmail] = useState('');
//   const [description, setDescription] = useState('');
//   const [age, setAge] = useState('');
//   const [sex, setSex] = useState('Male');
//   const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const prescriptionData = {
//       doctor_name: doctorName,
//       doctor_email: doctorEmail,
//       patient_name: patientName,
//       patient_number: patientNumber,
//       patient_email: patientEmail,
//       description: description,
//       age: age,
//       sex: sex,
//       date: date
//     };
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/prescriptions/', prescriptionData);
//       if (response.status === 201) {
//         setSuccess(true); // Setting success to true
//         // Reset form fields here if needed
//       } else {
//         alert("There was an error saving the prescription");
//       }
//     } catch (error) {
//       console.error("Error saving prescription:", error);
//       alert("Error saving prescription");
//     }
//   };

//   const handleDownloadPDF = () => {
//     downloadPDF(doctorName, doctorEmail, patientName, patientNumber, patientEmail, description, age, sex, date);
//   };
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { downloadPDF } from './pdfGenerator';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './AddPrescription.css';

function AddPrescription() {
  const [doctorName, setDoctorName] = useState('');
  const [doctorEmail, setDoctorEmail] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientNumber, setPatientNumber] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('Male');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const doctorEmail = localStorage.getItem("doctor_email");
    if (!doctorEmail) {
      navigate("/doctor-login");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const prescriptionData = {
      doctor_name: doctorName,
      doctor_email: doctorEmail,
      patient_name: patientName,
      patient_number: patientNumber,
      patient_email: patientEmail,
      description: description,
      age: age,
      sex: sex,
      date: date,
    };
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/prescriptions/', prescriptionData);
      if (response.status === 201) {
        setSuccess(true);
        // Reset form fields here if needed
      } else {
        alert("There was an error saving the prescription");
      }
    } catch (error) {
      console.error("Error saving prescription:", error);
      alert("Error saving prescription");
    }
  };

  const handleDownloadPDF = () => {
    downloadPDF(doctorName, doctorEmail, patientName, patientNumber, patientEmail, description, age, sex, date);
  };
  return (
    <div className="prescription-container">
      <Navbar  includeDoctorHomeLink/>
      <div className="prescription-form-container">
        <h2 className="form-title">Prescription Form</h2>
        {success && <div className="success-message">Prescription sent successfully!</div>}
        <form onSubmit={handleSubmit} className="prescription-form">
          <div className="form-row">
            <div className="form-col">
              <label>
                Doctor Name
                <input 
                  className="input-field"
                  placeholder="Enter Doctor name" 
                  value={doctorName} 
                  onChange={(e) => setDoctorName(e.target.value)}
                />
              </label>
              <label>
                Doctor Email
                <input 
                  className="input-field"
                  placeholder="Enter Doctor email" 
                  value={doctorEmail} 
                  onChange={(e) => setDoctorEmail(e.target.value)}
                />
              </label>
              <label>
                Patient Name
                <input 
                  className="input-field"
                  placeholder="Enter patient name" 
                  value={patientName} 
                  onChange={(e) => setPatientName(e.target.value)}
                />
              </label>
            </div>
            <div className="form-col">
              <label>
                Age
                <input 
                  className="input-field"
                  placeholder="Enter age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
              <label>
                Sex
                <select 
                  className="input-field"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <label>
                Date
                <input 
                  className="input-field"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="form-row">
            <label>
              Patient Number
              <input 
                className="input-field"
                placeholder="Enter patient number" 
                value={patientNumber} 
                onChange={(e) => setPatientNumber(e.target.value)}
              />
            </label>
            <label>
              Patient Email
              <input 
                className="input-field"
                placeholder="Enter patient email" 
                value={patientEmail} 
                onChange={(e) => setPatientEmail(e.target.value)}
              />
            </label>
          </div>
          <label>
            Write Prescription
            <textarea 
              className="textarea-field"
              placeholder="Write the prescription here" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <button type="submit" className="submit-button">Send Prescription</button>
        </form>
        <button onClick={handleDownloadPDF} className="download-button">Download Prescription</button>
      </div>
    </div>
  );
}

export default AddPrescription;

