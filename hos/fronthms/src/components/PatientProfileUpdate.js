import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './PatientProfileUpdate.css';

function PatientProfileUpdate() {
    const [formData, setFormData] = useState({
        age: '',
        pain_difficulty: '',
        been_diagnosed: '',
        description: '',
    });

    const [message, setMessage] = useState({ text: '', isError: false });
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch patient data and populate the form
        const email = localStorage.getItem('patient_email');
        fetch(`http://127.0.0.1:8000/api/get_patient_by_email/?email=${email}`)
            .then(response => response.json())
            .then(data => setFormData({ ...data }))
            .catch(error => console.error('Error fetching patient data:', error));
    }, []);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        
        // Add logic to send the form data to the backend API
        const email = localStorage.getItem('patient_email');
        fetch(`http://127.0.0.1:8000/api/patients/update-profile/?email=${email}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) throw new Error('Error updating profile');
                return response.json();
            })
            .then(() => {
                setMessage({ text: 'Update profile successful', isError: false });
                navigate('/patient-account');
            })
            .catch((error) => {
                console.error('Error updating profile:', error);
                setMessage({ text: 'Error updating profile', isError: true });
            });
    };

    return (
        <div className="patient-profile-update">
            <Navbar />
            <div className="patient-profile-update-background">
                <div className="form-container">
                    <h1>Update Your Profile and Medical Info</h1>
                    {message.text && (
                        <div className={message.isError ? 'message error-message' : 'message success-message'}>
                            {message.text}
                        </div>
                    )}
                    <form onSubmit={handleUpdateProfile}>
                        <div className="form-group">
                            <input
                                type="text"
                                value={formData.age}
                                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                placeholder="Age"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                value={formData.pain_difficulty}
                                onChange={(e) => setFormData({ ...formData, pain_difficulty: e.target.value })}
                                placeholder="Pain/Difficulty"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                value={formData.been_diagnosed}
                                onChange={(e) => setFormData({ ...formData, been_diagnosed: e.target.value })}
                                placeholder="Been Diagnosed"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Describe your condition"
                                required
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

export default PatientProfileUpdate;
