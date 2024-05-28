// // // PatientAppointment.js
// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // function PatientAppointment() {
// //     const [appointments, setAppointments] = useState([]);
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //         const patientEmail = localStorage.getItem("patient_email");

// //         if (!patientEmail) {
// //             navigate("/patient-login");
// //         } else {
// //             // Fetch appointments based on patient_email
// //             fetch(`http://127.0.0.1:8000/api/patient-appointments/?patient_email=${patientEmail}`)
// //                 .then(response => response.json())
// //                 .then(data => setAppointments(data))
// //                 .catch(error => console.error("Error fetching appointments:", error));
// //         }
// //     }, [navigate]);

// //     return (
// //         <div className="patient-appointment-container">
// //             <h1>Appointment History</h1>
// //             <table>
// //                 <thead>
// //                     <tr>
// //                         <th>Date</th>
// //                         <th>Time</th>
// //                         <th>Doctor Email</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {appointments.map(appointment => (
// //                         <tr key={appointment.id}>
// //                             <td>{appointment.appointment_date}</td>
// //                             <td>{appointment.appointment_time}</td>
// //                             <td>{appointment.doctor_email}</td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // }

// // export default PatientAppointment;
// // PatientAppointment.js

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar'; // Make sure to provide the correct path to your Navbar component
// import './PatientAppointment.css'; // Import the CSS file

// function PatientAppointment() {
//   const [appointments, setAppointments] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const patientEmail = localStorage.getItem("patient_email");

//     if (!patientEmail) {
//       navigate("/patient-login");
//     } else {
//       // Fetch appointments based on patient_email
//       fetch(`http://127.0.0.1:8000/api/patient-appointments/?patient_email=${patientEmail}`)
//         .then(response => response.json())
//         .then(data => setAppointments(data))
//         .catch(error => console.error("Error fetching appointments:", error));
//     }
//   }, [navigate]);

//   return (
//     <div className="patient-appointment-page">
//       <Navbar />
//       <div className="patient-appointment-container">
//         <h1>Appointment History</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Time</th>
//               <th>Doctor Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {appointments.map(appointment => (
//               <tr key={appointment.id}>
//                 <td>{appointment.appointment_date}</td>
//                 <td>{appointment.appointment_time}</td>
//                 <td>{appointment.doctor_email}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default PatientAppointment;
// PatientAppointment.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Make sure to provide the correct path to your Navbar component
import './CommonStyles.css'; // Import the common CSS file

function PatientAppointment() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const patientEmail = localStorage.getItem("patient_email");

    if (!patientEmail) {
      navigate("/patient-login");
    } else {
      // Fetch appointments based on patient_email
      fetch(`http://127.0.0.1:8000/api/patient-appointments/?patient_email=${patientEmail}`)
        .then(response => response.json())
        .then(data => setAppointments(data))
        .catch(error => console.error("Error fetching appointments:", error));
    }
  }, [navigate]);

  return (
    <div className="patient-appointment-page">
      <Navbar />
      <div className="container1">
        <h1>Check Your Appointments with Doctors</h1>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Doctor Email</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appointment => (
              <tr key={appointment.id}>
                <td>{appointment.appointment_date}</td>
                <td>{appointment.appointment_time}</td>
                <td>{appointment.doctor_email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientAppointment;
