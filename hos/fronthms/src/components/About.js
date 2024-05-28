// About.js
import React from 'react';
import Navbar from './Navbar';
import './About.css';
import hospitalImage from '../assets/thankyou.png'; // Import the hospital image

function About() {
    return (
        <div className="about-page-wrapper">
            <Navbar includeHomeLink includeBloodBankLink includeAboutLink />
            <div className="about-container">
                <div className="header-container">
                    <h1 className="about-header">About Mediwave Hospital</h1>
                    <img src={hospitalImage} alt="Hospital" className="hospital-image" />
                </div>
                <div className="about-content">
                    <div className="about-card">
                        <h2>Our Mission</h2>
                        <p>Providing the best medical care with advanced facilities and dedicated professionals.</p>
                    </div>
                    <div className="about-card">
                        <h2>Services</h2>
                        <ul>
                            <li>24/7 Emergency Care</li>
                            <li>Outpatient & Inpatient Services</li>
                            <li>Advanced Surgical Units</li>
                            <li>Rehabilitation Services</li>
                            <li>Diagnostic Imaging</li>
                            <li>Laboratory Services</li>
                        </ul>
                    </div>
                    <div className="about-card">
                        <h2>Contact Us</h2>
                        <p>You can reach out to us at contact@mediwavehospital.com or call us at +1234567890.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
