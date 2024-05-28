
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({
  includeHomeLink = false,
  includeBloodBankLink = false,
  includeAboutLink = false,
  includeSupportLink = false,
  includeLogoutLink = false,
  includeDoctorHomeLink= false,
  includePatientHomeLink = false,
  
  includeAdminLink=false,

  handleLogout
}) => {
  const currentDate = new Date().toLocaleString();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">MediWave Hospital</Link>
      <div className="nav-items">
        {includeHomeLink && <Link to="/">Home</Link>}
        {includeBloodBankLink && <Link to="/blood-bank">Blood Bank</Link>}
        {includeAboutLink && <Link to="/about">About Us</Link>}
        {includeSupportLink && <Link to="/supports">Supports</Link>}
        {includeDoctorHomeLink && <Link to="/doctor-account">Dashboard</Link>}
        {includePatientHomeLink && <Link to="/patient-account">Dashboard</Link>}
        {includeAdminLink && <Link to="http://127.0.0.1:8000/admin">Admin Login</Link>}
        
 
        
        {includeLogoutLink && <a href="/" onClick={(e) => { e.preventDefault(); handleLogout(); }}>Logout</a>}
        <span className="current-time">{currentDate}</span>
      </div>
    </nav>
  );
};

export default Navbar;
