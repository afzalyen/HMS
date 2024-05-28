

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './DoctorProfileUpdate.css';

function DoctorProfileUpdate() {
    const [doctorData, setDoctorData] = useState({
        first_name: '',
        last_name: '',
        password: '',
        speciality: '',
        department: '',
        email: '', 
        availability: '', 
    });
    const [message, setMessage] = useState({ text: '', isError: false });
    const navigate = useNavigate();

    useEffect(() => {
        const email = localStorage.getItem('doctor_email');
        fetch(`http://127.0.0.1:8000/api/get_doctor_by_email/?email=${email}`)
            .then(response => response.json())
            .then(data => setDoctorData({ ...data }))
            .catch(error => console.error('Error fetching doctor data:', error));
    }, []);

    const handleUpdateProfile = e => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/doctors/update-profile/', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(doctorData),
        })
            .then(response => {
                if (!response.ok) throw new Error('Error updating profile');
                return response.json();
            })
            .then(() => {
                setMessage({ text: 'Update profile successful', isError: false });
                navigate('/doctor-account');
            })
            .catch((error) => {
                console.error('Error updating profile:', error);
                setMessage({ text: 'Error updating profile', isError: true });
            });
    };

    return (
        <div className="doctor-profile-update">
            <Navbar />
            <div className="doctor-profile-update-background">
                <div className="form-container">
                    <h1>Update Your Profile</h1>
                    {message.text && (
                        <div className={message.isError ? 'message error-message' : 'message success-message'}>
                            {message.text}
                        </div>
                    )}
                    <form onSubmit={handleUpdateProfile}>
                        <div className="form-group">
                            <input
                                type="text"
                                value={doctorData.first_name}
                                onChange={(e) => setDoctorData({ ...doctorData, first_name: e.target.value })}
                                placeholder="First Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                value={doctorData.last_name}
                                onChange={(e) => setDoctorData({ ...doctorData, last_name: e.target.value })}
                                placeholder="Last Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                value={doctorData.password}
                                onChange={(e) => setDoctorData({ ...doctorData, password: e.target.value })}
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                value={doctorData.speciality}
                                onChange={(e) => setDoctorData({ ...doctorData, speciality: e.target.value })}
                                placeholder="Speciality"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                value={doctorData.department}
                                onChange={(e) => setDoctorData({ ...doctorData, department: e.target.value })}
                                placeholder="Department"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                value={doctorData.availability}
                                onChange={(e) => setDoctorData({ ...doctorData, availability: e.target.value })}
                                placeholder="Availability (e.g., 'Mon-Fri 9am-5pm')"
                            />
                        </div>
                        <div className="button-container">
                            <button type="submit">Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DoctorProfileUpdate;
