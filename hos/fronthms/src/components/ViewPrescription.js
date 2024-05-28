
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { downloadPDF } from './pdfGenerator';
// import './ViewPrescription.css';

// function ViewPrescription() {
//   const [doctorIdentifier, setDoctorIdentifier] = useState('');
//   const [prescriptions, setPrescriptions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const email = localStorage.getItem("patient_email");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!email) {
//       navigate('/patient-login');
//     }
//   }, [email, navigate]);

//   const handleSearch = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       const response = await axios.get(`http://127.0.0.1:8000/api/patient/prescriptions/?patient_email=${email}&doctor_identifier=${doctorIdentifier}`);
//       setPrescriptions(response.data);
//     } catch (error) {
//       setError("Error fetching prescriptions. Please try again.");
//       console.error("Error fetching prescriptions:", error);
//     }
//     setLoading(false);
//   };

//   const handleDownloadPDF = (prescription) => {
//     downloadPDF(
//       prescription.doctor_name,
//       prescription.doctor_email,
//       prescription.patient_name,
//       prescription.patient_number,
//       prescription.patient_email,
//       prescription.description,
//       prescription.age,
//       prescription.sex,
//       prescription.date
//     );
//   };

//   const renderPrescriptions = () => {
//     if (loading) {
//       return <p>Loading...</p>;
//     }
//     if (error) {
//       return <p>{error}</p>;
//     }
//     if (prescriptions.length === 0) {
//       return <p>No prescriptions found for the specified criteria.</p>;
//     }
//     return prescriptions.map((prescription, index) => (
//       <div key={index} className="prescription-card">
//         <h3>Prescription Details</h3>
//         <p><strong>Doctor:</strong> {prescription.doctor_name}</p>
//         <p><strong>Description:</strong> {prescription.description}</p>
//         <p><strong>Date:</strong> {prescription.date}</p>
//         <button onClick={() => handleDownloadPDF(prescription)} className="download-button">Download PDF</button>
//       </div>
//     ));
//   };

//   return (
//     <div className="view-prescription-container">
//       <h2>View Your Prescriptions</h2>
//       <div className="search-box">
//         <input 
//           type="text" 
//           value={doctorIdentifier} 
//           onChange={(e) => setDoctorIdentifier(e.target.value)} 
//           placeholder="Enter Doctor's Name or Email"
//         />
//         <button onClick={handleSearch} className="search-button">Search</button>
//       </div>
//       <div className="prescriptions-list">
//         {renderPrescriptions()}
//       </div>
//     </div>
//   );
// }

// export default ViewPrescription;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar'; // Import Navbar
// import { downloadPDF } from './pdfGenerator';
// import './ViewPrescription.css';

// function ViewPrescription() {
//   const [doctorIdentifier, setDoctorIdentifier] = useState('');
//   const [prescriptions, setPrescriptions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const email = localStorage.getItem("patient_email");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!email) {
//       navigate('/patient-login');
//     }
//   }, [email, navigate]);

//   const handleSearch = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       const response = await axios.get(`http://127.0.0.1:8000/api/patient/prescriptions/?patient_email=${email}&doctor_identifier=${doctorIdentifier}`);
//       setPrescriptions(response.data);
//     } catch (error) {
//       setError("Error fetching prescriptions. Please try again.");
//       console.error("Error fetching prescriptions:", error);
//     }
//     setLoading(false);
//   };

//   const handleDownloadPDF = (prescription) => {
//     downloadPDF(
//       prescription.doctor_name,
//       prescription.doctor_email,
//       prescription.patient_name,
//       prescription.patient_number,
//       prescription.patient_email,
//       prescription.description,
//       prescription.age,
//       prescription.sex,
//       prescription.date
//     );
//   };

//   const renderPrescriptions = () => {
//     if (loading) {
//       return <p>Loading...</p>;
//     }
//     if (error) {
//       return <p>{error}</p>;
//     }
//     if (prescriptions.length === 0) {
//       return <p>No prescriptions found for the specified criteria.</p>;
//     }
//     return prescriptions.map((prescription, index) => (
//       <div key={index} className="prescription-card">
//         <h3>Prescription Details</h3>
//         <p><strong>Doctor:</strong> {prescription.doctor_name}</p>
//         <p><strong>Description:</strong> {prescription.description}</p>
//         <p><strong>Date:</strong> {prescription.date}</p>
//         <button onClick={() => handleDownloadPDF(prescription)} className="download-button">Download PDF</button>
//       </div>
//     ));
//   };

//   return (
//     <div className="view-prescription-page">
//         <Navbar  includePatientHomeLink  />
//       <div className="view-prescription-container">
//         <h2>View Your Prescriptions</h2>
//         <div className="search-box">
//           <input 
//             type="text" 
//             value={doctorIdentifier} 
//             onChange={(e) => setDoctorIdentifier(e.target.value)} 
//             placeholder="Enter Doctor's Name or Email"
//           />
//           <button onClick={handleSearch} className="search-button">Search</button>
//         </div>
//         <div className="prescriptions-list">
//           {renderPrescriptions()}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ViewPrescription;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Import Navbar
import { downloadPDF } from './pdfGenerator';
import './ViewPrescription.css';

function ViewPrescription() {
  const [doctorIdentifier, setDoctorIdentifier] = useState('');
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const email = localStorage.getItem("patient_email");
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate('/patient-login');
    }
  }, [email, navigate]);

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/patient/prescriptions/?patient_email=${email}&doctor_identifier=${doctorIdentifier}`);
      setPrescriptions(response.data);
    } catch (error) {
      setError("Error fetching prescriptions. Please try again.");
      console.error("Error fetching prescriptions:", error);
    }
    setLoading(false);
  };

  const handleDownloadPDF = (prescription) => {
    downloadPDF(
      prescription.doctor_name,
      prescription.doctor_email,
      prescription.patient_name,
      prescription.patient_number,
      prescription.patient_email,
      prescription.description,
      prescription.age,
      prescription.sex,
      prescription.date
    );
  };

  const renderPrescriptions = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>{error}</p>;
    }
    if (prescriptions.length === 0) {
      return <p>No prescriptions found for the specified criteria.</p>;
    }
    return prescriptions.map((prescription, index) => (
      <div key={index} className="prescription-card">
        <h3>Prescription Details</h3>
        <p><strong>Doctor:</strong> {prescription.doctor_name}</p>
        <p><strong>Description:</strong> {prescription.description}</p>
        <p><strong>Date:</strong> {prescription.date}</p>
        <button onClick={() => handleDownloadPDF(prescription)} className="download-button">Download PDF</button>
      </div>
    ));
  };

  return (
    <div className="view-prescription-page">
      <Navbar includePatientHomeLink />
      <div className="view-prescription-container">
        <h2>View Your Prescriptions</h2>
        <div className="search-box">
          <input 
            type="text" 
            value={doctorIdentifier} 
            onChange={(e) => setDoctorIdentifier(e.target.value)} 
            placeholder="Enter Doctor's Name or Email"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
        <div className="prescriptions-list">
          {renderPrescriptions()}
        </div>
      </div>
    </div>
  );
}

export default ViewPrescription;
