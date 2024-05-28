
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from './components/Navbar'; 
import DoctorLogin from "./components/DoctorLogin";
import DoctorSignUp from "./components/DoctorSignUp";
import PatientLogin from "./components/PatientLogin";
import PatientSignUp from "./components/PatientSignUp";
import PatientAccount from "./components/PatientAccount";
import DoctorAccount from './components/DoctorAccount';
import About from './components/About';
import AddPrescription from './components/AddPrescription';
import ViewPrescription from './components/ViewPrescription';
import DoctorProfileUpdate from './components/DoctorProfileUpdate'; 
import DoctorDetails from './components/DoctorDetails'; 
import BookWard from './components/BookWard'; 
import BookCabin from './components/BookCabin'; 
import ViewBill from './components/ViewBill'; 
import PatientDetails from './components/PatientDetails'; 
import PatientPrescription from './components/PatientPrescription'; 
import BloodBank from './components/BloodBank'; 
import Appointment from './components/Appointment';
import Supports from './components/Supports';
import BloodDonors from './components/BloodDonors';
import BloodAvailability from './components/BloodAvailability';
import BloodRecipient from './components/BloodRecipient';
import BloodGroup from './components/BloodGroup';
import Test from './components/Test';
import PatientProfileUpdate from './components/PatientProfileUpdate';
import PatientMedicalHistory from './components/PatientMedicalHistory';
import ViewAppointments from "./components/ViewAppointments";
import PatientAppointment from './components/PatientAppointment';
import Chatbox from './components/Chatbox';

// Make sure the path to SessionContext is correct
import { SessionProvider } from './components/SessionContext';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <SessionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nav-bar" element={<Navbar/>} /> 
          <Route path="/doctor-login" element={<DoctorLogin />} />
          <Route path="/doctor-signup" element={<DoctorSignUp />} />
          <Route path="/patient-login" element={<PatientLogin />} />
          <Route path="/patient-signup" element={<PatientSignUp />} />
          <Route path="/doctor-account" element={<DoctorAccount />} />
          <Route path="/patient-account" element={<PatientAccount />} />
          <Route path="/add-prescription" element={<AddPrescription />} />
          <Route path="/About" element={<About />} />
          <Route path="/view-prescription" element={<ViewPrescription />} />
          <Route path="/doctor-profile-update" element={<DoctorProfileUpdate />} /> 
          <Route path="/doctor-details" element={<DoctorDetails />} /> 
          <Route path="/book-ward" element={<BookWard/>} />
          <Route path="/book-cabin" element={<BookCabin />} />  
          <Route path="/view-bill" element={<ViewBill/>} /> 
          <Route path="/patient-details" element={<PatientDetails/>} /> 
          <Route path="/patient-prescription" element={<PatientPrescription/>} /> 
          <Route path="/blood-bank" element={<BloodBank/>} /> 
          <Route path="/appointment" element={<Appointment/>} /> 
          <Route path="/supports" element={<Supports/>} /> 
          <Route path="/blood-donors" element={<BloodDonors/>} /> 
          <Route path="/blood-availability" element={<BloodAvailability/>} /> 
          <Route path="/blood-recipients" element={<BloodRecipient/>} /> 
          <Route path="/blood-group" element={<BloodGroup/>} /> 
          <Route path="/test" element={<Test/>} /> 
          <Route path="/patient-profile-update" element={<PatientProfileUpdate />} /> 
          <Route path="/patient-medical-history" element={<PatientMedicalHistory />} /> 
          <Route path="/view-appointments" element={<ViewAppointments />} />
          <Route path="/patient-appointment-history" element={<PatientAppointment />} />
          <Route path="/chatbox" element={<Chatbox/>} /> 
        
         
         
          
          
          

        

        </Routes>
      </Router>
    </SessionProvider>
  );
}

export default App;
