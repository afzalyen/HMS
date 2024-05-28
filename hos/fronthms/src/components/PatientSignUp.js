
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; 
import './PatientSignUp.css';

function PatientSignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [sex, setSex] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }

        const patientData = {
            first_name: firstName,
            last_name: lastName,
            sex: sex,
            dob: dob,
            email: email,
            phone: phone,
            bloodGroup: bloodGroup,
            password: password,
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/api/patients/signup/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(patientData),
            });

            if (!response.ok) {
                const data = await response.json();
                if (data.email) {
                    setErrorMessage(data.email);
                } else if (data.phone) {
                    setErrorMessage(data.phone);
                } else {
                    setErrorMessage('An error occurred during signup.');
                }
            } else {
                navigate('/patient-login');
            }
        } catch (error) {
            console.error('Error during signup:', error);
            setErrorMessage(error.message);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="patient-signup-container">
                <div className="patient-signup-form">
                    <h2>Patient Registration</h2>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <form onSubmit={handleSignUp}>
                        <div className="form-group">
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First Name"
                            />
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last Name"
                            />
                        </div>
                        <div className="form-group">
                            <select value={sex} onChange={(e) => setSex(e.target.value)}>
                                <option value="">Select Sex</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <input
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                placeholder="Date of Birth"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                            />
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Phone"
                            />
                        </div>
                        <div className="form-group">
                            <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
                                <option value="">Select Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password"
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit">Sign Up</button>
                        </div>
                        <div className="patient-signup-option mt-3">
                            Already have an account? <Link to="/patient-login">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PatientSignUp;
