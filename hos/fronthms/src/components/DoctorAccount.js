
// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './DoctorAccount.css';
// import Navbar from './Navbar';
// // import ViewAppointments from './ViewAppointments';

// function DoctorAccount() {
//     const [doctor, setDoctor] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const email = localStorage.getItem("doctor_email");
//         if (!email) {
//             navigate("/doctor-login");
//         } else {
//             fetch(`http://127.0.0.1:8000/api/get_doctor_by_email/?email=${email}`)
//                 .then(response => response.json())
//                 .then(data => setDoctor(data))
//                 .catch(error => console.error("Error fetching doctor details:", error));
//         }
//     }, [navigate]);

//     const handleLogout = () => {
//         localStorage.removeItem("doctor_email");
//         navigate("/");
//     };

//     const getTimeOfDayGreeting = () => {
//         const hour = new Date().getHours();
//         return hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';
//     };

//     if (!doctor) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="doctor-account-background">
//             <Navbar includeDoctorHomeLink includeLogoutLink={true} handleLogout={handleLogout} /> 
//             <div className="dashboard-container">
//                 <div className="welcome-profile-box">
//                     <h1>{getTimeOfDayGreeting()}, Dr. {doctor.first_name} {doctor.last_name}</h1>
//                     <Link to="/doctor-profile-update" className="profile-link">Update Your Profile</Link>
//                 </div>
                
//                 <div className="dashboard-options">
//                 <div className="dashboard-box">
//                         <h2>View Patients and Medical History</h2>
//                         <p>View Patients previous Medical History and Info</p>
//                         <Link to="/patient-medical-history" className="box-link">View Patients Medical History</Link>
//                     </div>
//                     <div className="dashboard-box">
//                         <h2>View Patients Prescription</h2>
//                         <p>View and manage your patient records</p>
//                         <Link to="/patient-prescription" className="box-link">View Patients Prescription</Link>
//                     </div>
//                     <div className="dashboard-box">
//                         <h2>Add Test and Services</h2>
//                         <p>Test and Services Patients needed</p>
//                         <Link to="/test" className="box-link">Add test and Services</Link>
//                     </div>
                   
                
//                     <div className="dashboard-box">
//                         <h2>Add Prescription</h2>
//                         <p>Add a new prescription for a patient</p>
//                         <Link to="/add-prescription" className="box-link">Add Prescription</Link>
//                     </div>
//                     <div className="dashboard-box">
//                         <h2>View Appointments</h2>
//                         <p>View and manage your appointments</p>
//                         <Link to="/view-appointments" className="box-link">View Appointments</Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default DoctorAccount;

// Updated JavaScript (DoctorAccount.js)

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './DoctorAccount.css';
import Navbar from './Navbar';

function DoctorAccount() {
    const [doctor, setDoctor] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const email = localStorage.getItem("doctor_email");
        if (!email) {
            navigate("/doctor-login");
        } else {
            fetch(`http://127.0.0.1:8000/api/get_doctor_by_email/?email=${email}`)
                .then(response => response.json())
                .then(data => setDoctor(data))
                .catch(error => console.error("Error fetching doctor details:", error));
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("doctor_email");
        navigate("/");
    };

    const getTimeOfDayGreeting = () => {
        const hour = new Date().getHours();
        return hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';
    };

    if (!doctor) {
        return <div>Loading...</div>;
    }

    return (
        <div className="doctor-account-background">
            <Navbar includeDoctorHomeLink includeLogoutLink={true} handleLogout={handleLogout} /> 
            <div className="dashboard-container">
                <div className="welcome-profile-box">
                    <h1>{getTimeOfDayGreeting()}, Dr. {doctor.first_name} {doctor.last_name}</h1>
                    <Link to="/doctor-profile-update" className="profile-link">Update Your Profile</Link>
                </div>
                
                <div className="dashboard-options">
                    <div className="dashboard-box">
                        <h2>View Patients and Medical History</h2>
                        <p>View Patients previous Medical History and Info</p>
                        <Link to="/patient-medical-history" className="box-link">View Patients Medical History</Link>
                    </div>
                    <div className="dashboard-box">
                        <h2>View Patients Prescription</h2>
                        <p>View and manage your patient records</p>
                        <Link to="/patient-prescription" className="box-link">View Patients Prescription</Link>
                    </div>
                    <div className="dashboard-box">
                        <h2>Add Test and Services</h2>
                        <p>Test and Services Patients needed</p>
                        <Link to="/test" className="box-link">Add test and Services</Link>
                    </div>
                    <div className="dashboard-box">
                        <h2>Add Prescription</h2>
                        <p>Add a new prescription for a patient</p>
                        <Link to="/add-prescription" className="box-link">Add Prescription</Link>
                    </div>
                    <div className="dashboard-box">
                        <h2>View Appointments</h2>
                        <p>View and manage your appointments</p>
                        <Link to="/view-appointments" className="box-link">View Appointments</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorAccount;
