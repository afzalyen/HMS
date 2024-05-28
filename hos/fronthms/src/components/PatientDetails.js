// PatientDetails.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './PatientDetails.css';

function PatientDetails() {
    return (
        <div className="patient-details-page">
            <Navbar />
            <div className="patient-details-container">
                <h1 className="patient-details-title">Patient Details Dashboard</h1>
                <div className="dashboard-cards">
                    <Link to="/patient-prescription" className="dashboard-card">
                        <div className="card-content">
                            <h2>View Prescription</h2>
                            <p>View patient's medical prescriptions</p>
                        </div>
                    </Link>

                    <Link to="/test" className="dashboard-card">
                        <div className="card-content">
                            <h2>Add Test and Services</h2>
                            <p>Add Patients test and services</p>
                        </div>
                    </Link>

                    <Link to="/patient-medical-history" className="dashboard-card">
                        <div className="card-content">
                            <h2>Check Patients Previous Medical History </h2>
                            <p>Check Medical History</p>
                        </div>
                    </Link>

                    {/* Add more dashboard cards as needed */}
                </div>
            </div>
        </div>
    );
}

export default PatientDetails;
