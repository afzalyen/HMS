
import React, { useState, useEffect } from 'react';
import './PatientAccount.css';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar';
function PatientAccount() {
    const [patient, setPatient] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const email = localStorage.getItem("patient_email");

        if (!email) {
            navigate("/patient-login");
        } else {
            fetch(`http://127.0.0.1:8000/api/get_patient_by_email/?email=${email}`)
                .then(response => response.json())
                .then(data => {
                    setPatient(data);
                })
                .catch(error => {
                    console.error("Error fetching patient details:", error);
                });
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("patient_email");
        navigate("/");
    };

    if (!patient) {
        return <div>Loading...</div>;
    }

    return (
        <div className="patient-account-background">
            <Navbar  includePatientHomeLink includeLogoutLink={true} handleLogout={handleLogout} />
            <div className="dashboard-container">
                <div className="welcome-profile-box">
                    <h1>Welcome, {patient.first_name} {patient.last_name}</h1>
                    <Link to="/patient-profile-update" className="profile-link">Add your Medical History</Link>
                </div>
                <div className="dashboard-options">
                    <div className="dashboard-box">
                        <h2>Check Doctors and Departments</h2>
                        <p>Find Doctor details, speciality, and Departments</p>
                        <Link to="/doctor-details" className="box-link">
                            Check Doctor Details
                        </Link>
                    </div>
                    <div className="dashboard-box">
                        <h2>Book Appointments</h2>
                        <p>See your appointments and Book an appointment with your preferred doctor</p>
                        <Link to="/appointment" className="box-link">
                            Book Online Appointments
                        </Link>
                        <Link to="/patient-appointment-history" className="box-link">
                            View Appointment History
                        </Link>
                    </div>
                
                    <div className="dashboard-box">
                        <h2>Book Cabin/Wards</h2>
                        <p>Book wards and cabins for better treatment</p>
                        <Link to="/book-ward" className="box-link">
                            Book Ward
                        </Link>
                        <Link to="/book-cabin" className="box-link">
                            Book Cabin
                        </Link>
                    </div>
                    <div className="dashboard-box">
                        <h2>View Prescription</h2>
                        <p>View prescribed medications and instructions</p>
                        <Link to="/view-prescription" className="box-link">
                            View Prescription
                        </Link>
                    </div>
                    <div className="dashboard-box">
                        <h2>View Bill</h2>
                        <p>View your Bill and download receipts</p>
                        <Link to="/view-bill" className="box-link">
                            View Bill
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PatientAccount;
