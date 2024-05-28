// // Updated Test.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Test.css';
// import Navbar from './Navbar'; // Assuming Navbar.js is in the same directory

// const Test = () => {
//   const [testCharge, setTestCharge] = useState([]);
//   const [selectedTests, setSelectedTests] = useState([]);
//   const [totalBill, setTotalBill] = useState(0);
//   const [doctorName, setDoctorName] = useState('');
//   const [doctorEmail, setDoctorEmail] = useState('');
//   const [patientName, setPatientName] = useState('');
//   const [patientEmail, setPatientEmail] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const itemsPerPage = 5;
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalItems = testCharge.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   useEffect(() => {
//     // Fetch test charge data from the Django API
//     axios.get('http://127.0.0.1:8000/api/get-test-charge/')
//       .then(response => setTestCharge(response.data))
//       .catch(error => console.error('Error fetching test charge:', error));
//   }, []);

//   const handleTestSelection = (test) => {
//     const updatedTests = selectedTests.includes(test)
//       ? selectedTests.filter(selectedTest => selectedTest !== test)
//       : [...selectedTests, test];

//     setSelectedTests(updatedTests);
//     const updatedTotalBill = updatedTests.reduce((acc, selectedTest) => {
//       const matchingTest = testCharge.find(tc => tc.service_name === selectedTest);
//       return acc + (matchingTest ? parseFloat(matchingTest.price) : 0);
//     }, 0);
//     setTotalBill(updatedTotalBill);
//   };

//   const handleSendTest = () => {
//     // Send test details to the server and store in the test_bill table
//     axios.post('http://127.0.0.1:8000/api/test-bill/', {
//       doctor_name: doctorName,
//       doctor_email: doctorEmail,
//       patient_name: patientName,
//       patient_email: patientEmail,
//       test_name: selectedTests,
//       total_bill: totalBill,
//     })
//       .then(response => {
//         console.log('Test sent successfully:', response.data);
//         setSuccessMessage('Test sent successfully!');
//         setErrorMessage('');
//       })
//       .catch(error => {
//         console.error('Error sending test:', error);
//         setSuccessMessage('');
//         setErrorMessage('Error sending test. Please try again.');
//       });
//   };

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   const visibleTests = testCharge.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <div className="test-body">
//       <Navbar includeDoctorHomeLink/>
//       <div className="test-container">
//         <div className="test-box">
//           <h2 className="table-title">Test Charge</h2>
//           <table className="test-service-table">
//             <thead>
//               <tr>
//                 <th>Service Name</th>
//                 <th>Price</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {visibleTests.map((test, index) => (
//                 <tr key={test.service_name} className={`table-row-${index + 1}`}>
//                   <td>{test.service_name}</td>
//                   <td>BDT {test.price}</td>
//                   <td>
//                     <button
//                       onClick={() => handleTestSelection(test.service_name)}
//                       className={selectedTests.includes(test.service_name) ? 'selected-blue' : ''}
//                     >
//                       {selectedTests.includes(test.service_name) ? 'Selected' : 'Select'}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <div className="pagination">
//             {Array.from({ length: totalPages }, (_, index) => (
//               <span
//                 key={index}
//                 className={currentPage === index + 1 ? 'active' : ''}
//                 onClick={() => handlePageChange(index + 1)}
//               >
//                 {index + 1}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div className="test-box test-add-to-patient">
//           <h2 className="form-title">Add Test to Patient</h2>
//           <div className="form">
//             <label>Doctor Name:</label>
//             <input type="text" value={doctorName} onChange={(e) => setDoctorName(e.target.value)} />
//             <label>Doctor Email:</label>
//             <input type="email" value={doctorEmail} onChange={(e) => setDoctorEmail(e.target.value)} />
//             <label>Patient Name:</label>
//             <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} />
//             <label>Patient Email:</label>
//             <input type="email" value={patientEmail} onChange={(e) => setPatientEmail(e.target.value)} />
//             <label>Selected Tests:</label>
//             <div>
//               {selectedTests.map(test => (
//                 <span key={test} className="selected-test">{test}</span>
//               ))}
//             </div>
//             <label>Total Bill:</label>
//             <span>BDT {totalBill.toFixed(2)}</span>
//             <button onClick={handleSendTest}>Send Test</button>
//             {successMessage && <p className="success-message">{successMessage}</p>}
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test;
// Updated Test.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Test.css';
// import Navbar from './Navbar'; // Assuming Navbar.js is in the same directory

// const Test = () => {
//   const [testCharge, setTestCharge] = useState([]);
//   const [selectedTests, setSelectedTests] = useState([]);
//   const [totalBill, setTotalBill] = useState(0);
//   const [doctorName, setDoctorName] = useState('');
//   const [doctorEmail, setDoctorEmail] = useState('');
//   const [patientName, setPatientName] = useState('');
//   const [patientEmail, setPatientEmail] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const itemsPerPage = 5;
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalItems = testCharge.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   const navigate = useNavigate();

//   useEffect(() => {
//       const doctorEmail = localStorage.getItem("doctor_email");
//       if (!doctorEmail) {
//           // Redirect to the doctor login page if not authenticated
//           navigate("/doctor-login");
//       }
//   }, [navigate]);


//   useEffect(() => {
//     // Fetch test charge data from the Django API
//     axios.get('http://127.0.0.1:8000/api/get-test-charge/')
//       .then(response => setTestCharge(response.data))
//       .catch(error => console.error('Error fetching test charge:', error));
//   }, []);

//   const handleTestSelection = (test) => {
//     const updatedTests = selectedTests.includes(test)
//       ? selectedTests.filter(selectedTest => selectedTest !== test)
//       : [...selectedTests, test];

//     setSelectedTests(updatedTests);
//     const updatedTotalBill = updatedTests.reduce((acc, selectedTest) => {
//       const matchingTest = testCharge.find(tc => tc.service_name === selectedTest);
//       return acc + (matchingTest ? parseFloat(matchingTest.price) : 0);
//     }, 0);
//     setTotalBill(updatedTotalBill);
//   };

//   const handleSendTest = () => {
//     // Send test details to the server and store in the test_bill table
//     axios.post('http://127.0.0.1:8000/api/test-bill/', {
//       doctor_name: doctorName,
//       doctor_email: doctorEmail,
//       patient_name: patientName,
//       patient_email: patientEmail,
//       test_name: selectedTests,
//       total_bill: totalBill,
//     })
//       .then(response => {
//         console.log('Test sent successfully:', response.data);
//         setSuccessMessage('Test sent successfully!');
//         setErrorMessage('');
//       })
//       .catch(error => {
//         console.error('Error sending test:', error);
//         setSuccessMessage('');
//         setErrorMessage('Error sending test. Please try again.');
//       });
//   };

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   const visibleTests = testCharge.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Test.css';
import Navbar from './Navbar';

const Test = () => {
  const [testCharge, setTestCharge] = useState([]);
  const [selectedTests, setSelectedTests] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const [doctorName, setDoctorName] = useState('');
  const [doctorEmail, setDoctorEmail] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = testCharge.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const navigate = useNavigate();

  useEffect(() => {
    const doctorEmail = localStorage.getItem("doctor_email");
    if (!doctorEmail) {
      // Redirect to the doctor login page if not authenticated
      navigate("/doctor-login");
    } else {
      // Fetch test charge data from the Django API
      axios.get('http://127.0.0.1:8000/api/get-test-charge/')
        .then(response => setTestCharge(response.data))
        .catch(error => console.error('Error fetching test charge:', error));
    }
  }, [navigate]);

  const handleTestSelection = (test) => {
    const updatedTests = selectedTests.includes(test)
      ? selectedTests.filter(selectedTest => selectedTest !== test)
      : [...selectedTests, test];

    setSelectedTests(updatedTests);
    const updatedTotalBill = updatedTests.reduce((acc, selectedTest) => {
      const matchingTest = testCharge.find(tc => tc.service_name === selectedTest);
      return acc + (matchingTest ? parseFloat(matchingTest.price) : 0);
    }, 0);
    setTotalBill(updatedTotalBill);
  };

  const handleSendTest = () => {
    // Send test details to the server and store in the test_bill table
    axios.post('http://127.0.0.1:8000/api/test-bill/', {
      doctor_name: doctorName,
      doctor_email: doctorEmail,
      patient_name: patientName,
      patient_email: patientEmail,
      test_name: selectedTests,
      total_bill: totalBill,
    })
      .then(response => {
        console.log('Test sent successfully:', response.data);
        setSuccessMessage('Test sent successfully!');
        setErrorMessage('');
      })
      .catch(error => {
        console.error('Error sending test:', error);
        setSuccessMessage('');
        setErrorMessage('Error sending test. Please try again.');
      });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const visibleTests = testCharge.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="test-body">
      <Navbar includeDoctorHomeLink />
      <div className="test-container">
        <div className="test-box">
          <h2 className="table-title">Test and Service Charges</h2>
          <table className="test-service-table">
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {visibleTests.map((test, index) => (
                <tr key={test.service_name} className={`table-row-${index + 1}`}>
                  <td>{test.service_name}</td>
                  <td>BDT {test.price}</td>
                  <td>
                    <button
                      onClick={() => handleTestSelection(test.service_name)}
                      className={selectedTests.includes(test.service_name) ? 'selected-blue' : ''}
                    >
                      {selectedTests.includes(test.service_name) ? 'Selected' : 'Select'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <span
                key={index}
                className={currentPage === index + 1 ? 'active' : ''}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </span>
            ))}
          </div>
        </div>

        <div className="test-box test-add-to-patient">
          <h2 className="form-title">Add Test  and Services to Patient</h2>
          <div className="form">
            <label>Doctor Name:</label>
            <input type="text" value={doctorName} onChange={(e) => setDoctorName(e.target.value)} />
            <label>Doctor Email:</label>
            <input type="email" value={doctorEmail} onChange={(e) => setDoctorEmail(e.target.value)} />
            <label>Patient Name:</label>
            <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} />
            <label>Patient Email:</label>
            <input type="email" value={patientEmail} onChange={(e) => setPatientEmail(e.target.value)} />
            <label>Selected Tests:</label>
            <div className="selected-tests-container">
              {selectedTests.map(test => (
                <span key={test} className="selected-test">{test}</span>
              ))}
            </div>
            <label>Total Bill:</label>
            <span>BDT {totalBill.toFixed(2)}</span>
            <button onClick={handleSendTest}>Send Test</button>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
