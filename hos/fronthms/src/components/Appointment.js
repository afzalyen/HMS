
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Appointment.css'; 
// // import { Link } from 'react-router-dom';
// // import Navbar from './Navbar'

// const Appointment = () => {
//   const [departments, setDepartments] = useState([]);
//   const [doctors, setDoctors] = useState([]);
//   const [selectedDepartment, setSelectedDepartment] = useState('');
//   const [selectedDoctor, setSelectedDoctor] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedDay, setSelectedDay] = useState('');
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
//   const [patientName, setPatientName] = useState('');
//   const [patientEmail, setPatientEmail] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     axios.get('http://127.0.0.1:8000/api/departments/')
//       .then(response => {
//         setDepartments(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching departments:', error);
//       });
//   }, []);

//   useEffect(() => {
//     if (selectedDepartment) {
//       axios.get(`http://127.0.0.1:8000/api/get-doctor-info/${selectedDepartment}/`)
//         .then(response => {
//           setDoctors(response.data);
//         })
//         .catch(error => {
//           console.error(`Error fetching doctors for ${selectedDepartment} department:`, error);
//         });
//     }
//   }, [selectedDepartment]);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const appointmentData = {
//       department: selectedDepartment,
//       doctor_email: selectedDoctor,
//       appointment_date: selectedDate,
//       appointment_datetime : selectedDate+" "+selectedTimeSlot.slice(0,5)+":00",
//       day: selectedDay,
//       appointment_time: selectedTimeSlot.slice(0,5),  // Updated field name to match backend
//       patient_name: patientName,
//       patient_email: patientEmail,
//     };
//     console.log(appointmentData);
//     console.log(typeof appointmentData.appointment_date);
//     console.log(typeof appointmentData.appointment_time);

//     axios.post('http://127.0.0.1:8000/api/create-appointment/', appointmentData)
//       .then(response => {
//         setSuccessMessage('Appointment created successfully');
//         setErrorMessage('');
//         setSelectedDepartment('');
//         setSelectedDoctor('');
//         setSelectedDate('');
//         setSelectedDay('');
//         setSelectedTimeSlot('');
//         setPatientName('');
//         setPatientEmail('');
//       })
//       .catch(error => {
//         setSuccessMessage('');
//         setErrorMessage(error.response.data.error || 'Error creating appointment. Please check your inputs and try again.');
//         console.error('Error creating appointment:', error);
//       });
//   };

//   return (
//     <div className="appointment-container">
//       {/* <Navbar/> */}
//       <h1 style={{ color: 'white' }}>Book Appointment</h1>
//       <form className="appointment-form" onSubmit={handleSubmit}>
//         {/* Department selection */}
//         <div>
//           <label>Select Department:</label>
//           <select onChange={(e) => setSelectedDepartment(e.target.value)} value={selectedDepartment}>
//             <option value="" disabled>Select Department</option>
//             {departments.map(department => (
//               <option key={department} value={department}>{department}</option>
//             ))}
//           </select>
//         </div>

//         {/* Doctor selection */}
//         <div>
//           <label>Select Doctor:</label>
//           <select onChange={(e) => setSelectedDoctor(e.target.value)} value={selectedDoctor}>
//             <option value="" disabled>Select Doctor</option>
//             {doctors.map(doctor => (
//               <option key={doctor.email} value={doctor.email}>{doctor.first_name} {doctor.last_name}</option>
//             ))}
//           </select>
//         </div>

//         {/* Date selection */}
//         <div>
//           <label>Select Date:</label>
//           <input type="date" onChange={(e) => setSelectedDate(e.target.value)} value={selectedDate} />
//         </div>

//         {/* Day selection */}
//         <div>
//           <label>Select Day:</label>
//           <select onChange={(e) => setSelectedDay(e.target.value)} value={selectedDay}>
//             <option value="" disabled>Select Day</option>
//             <option value="Monday">Monday</option>
//             <option value="Tuesday">Tuesday</option>
//             <option value="Wednesday">Wednesday</option>
//             <option value="Thursday">Thursday</option>
//             <option value="Friday">Friday</option>
//             <option value="Saturday">Saturday</option>
//             <option value="Sunday">Sunday</option>
//           </select>
//         </div>

//         {/* Time slot selection */}
//         <div>
//           <label>Select Time Slot:</label>
//           <select onChange={(e) => setSelectedTimeSlot(e.target.value)} value={selectedTimeSlot}>
//             <option value="" disabled>Select Time Slot</option>
//             <option value="10:00-10:20">10:00-10:20</option>
//             <option value="10:20-10:40">10:20-10:40</option>
//             <option value="10:40-11:00">10:40-11:00</option>
//             <option value="11:00-11:20">11:00-11:20</option>
//             <option value="11:20-11:40">11:20-11:40</option>
//             <option value="11:40-12:00">11:40-12:00</option>
//           </select>
//         </div>

//         {/* Patient name input */}
//         <div>
//           <label>Patient Name:</label>
//           <input type="text" onChange={(e) => setPatientName(e.target.value)} value={patientName} />
//         </div>

//         {/* Patient email input */}
//         <div>
//           <label>Patient Email:</label>
//           <input type="email" onChange={(e) => setPatientEmail(e.target.value)} value={patientEmail} />
//         </div>

//         {/* Submit button */}
//         <button type="submit">Book Appointment</button>

//         {/* Success and Error Messages */}
//         {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
//         {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       </form>
      
//             {/* ... (existing code) */}

//             {/* New button to navigate to patient appointment history */}
//             {/* <Link to="/patient-appointment-history" className="appointment-history-button">
//                 View Appointment History
//             </Link> */}
        
//     </div>
//   );
// };

// export default Appointment;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Appointment.css';

const Appointment = () => {
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("patient_email");

    if (!email) {
      navigate("/patient-login");
    }
  }, [navigate]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/departments/')
      .then(response => {
        setDepartments(response.data);
      })
      .catch(error => {
        console.error('Error fetching departments:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedDepartment) {
      axios.get(`http://127.0.0.1:8000/api/get-doctor-info/${selectedDepartment}/`)
        .then(response => {
          setDoctors(response.data);
        })
        .catch(error => {
          console.error(`Error fetching doctors for ${selectedDepartment} department:`, error);
        });
    }
  }, [selectedDepartment]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const appointmentData = {
      department: selectedDepartment,
      doctor_email: selectedDoctor,
      appointment_date: selectedDate,
      appointment_datetime: selectedDate + " " + selectedTimeSlot.slice(0, 5) + ":00",
      day: selectedDay,
      appointment_time: selectedTimeSlot.slice(0, 5),
      patient_name: patientName,
      patient_email: patientEmail,
    };

    axios.post('http://127.0.0.1:8000/api/create-appointment/', appointmentData)
      .then(response => {
        setSuccessMessage('Appointment created successfully');
        setErrorMessage('');

        // Store patient information in localStorage
        const patientInfo = {
          patientName,
          patientEmail,
        };

        localStorage.setItem('patientInfo', JSON.stringify(patientInfo));

        // Clear form fields
        setSelectedDepartment('');
        setSelectedDoctor('');
        setSelectedDate('');
        setSelectedDay('');
        setSelectedTimeSlot('');
        setPatientName('');
        setPatientEmail('');
      })
      .catch(error => {
        setSuccessMessage('');
        setErrorMessage(error.response.data.error || 'Error creating appointment. Please check your inputs and try again.');
        console.error('Error creating appointment:', error);
      });
  };

  return (
    <div className="appointment-container">
      <h1 style={{ color: 'white' }}>Book Appointment</h1>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <div>
          <label>Select Department:</label>
          <select onChange={(e) => setSelectedDepartment(e.target.value)} value={selectedDepartment}>
            <option value="" disabled>Select Department</option>
            {departments.map(department => (
              <option key={department} value={department}>{department}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Select Doctor:</label>
          <select onChange={(e) => setSelectedDoctor(e.target.value)} value={selectedDoctor}>
            <option value="" disabled>Select Doctor</option>
            {doctors.map(doctor => (
              <option key={doctor.email} value={doctor.email}>{doctor.first_name} {doctor.last_name}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Select Date:</label>
          <input type="date" onChange={(e) => setSelectedDate(e.target.value)} value={selectedDate} />
        </div>

        <div>
          <label>Select Day:</label>
          <select onChange={(e) => setSelectedDay(e.target.value)} value={selectedDay}>
            <option value="" disabled>Select Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>

        <div>
          <label>Select Time Slot:</label>
          <select onChange={(e) => setSelectedTimeSlot(e.target.value)} value={selectedTimeSlot}>
            <option value="" disabled>Select Time Slot</option>
            <option value="10:00-10:20">10:00-10:20</option>
            <option value="10:20-10:40">10:20-10:40</option>
            <option value="10:40-11:00">10:40-11:00</option>
            <option value="11:00-11:20">11:00-11:20</option>
            <option value="11:20-11:40">11:20-11:40</option>
            <option value="11:40-12:00">11:40-12:00</option>
          </select>
        </div>

        <div>
          <label>Patient Name:</label>
          <input type="text" onChange={(e) => setPatientName(e.target.value)} value={patientName} />
        </div>

        <div>
          <label>Patient Email:</label>
          <input type="email" onChange={(e) => setPatientEmail(e.target.value)} value={patientEmail} />
        </div>

        <button type="submit">Book Appointment</button>

        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Appointment;
