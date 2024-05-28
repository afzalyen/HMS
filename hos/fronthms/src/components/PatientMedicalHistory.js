
// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import './PatientMedicalHistory.css';

// function PatientMedicalHistory() {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);

//     const handleSearch = () => {
//         setIsLoading(true);
//         fetch(`http://127.0.0.1:8000/api/search-patient/?query=${searchQuery}`)
//             .then(response => response.json())
//             .then(data => setSearchResults(data))
//             .catch(error => console.error('Error searching patient:', error))
//             .finally(() => setIsLoading(false));
//     };

//     return (
//         <div className="patient-medical-history">
//             <Navbar />
//             <div className="patient-medical-history-container">
//                 <h1>Patient Medical History</h1>
//                 <div className="search-container">
//                     <input
//                         type="text"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         placeholder="Search by name or email"
//                         className="search-input"
//                     />
//                     <button onClick={handleSearch} disabled={isLoading} className="search-button">
//                         {isLoading ? 'Searching...' : 'Search'}
//                     </button>
//                 </div>
//                 {isLoading && <div className="loading-spinner"></div>}
//                 {searchResults.length > 0 ? (
//                     <div>
//                         <h2>Search Results:</h2>
//                         <ul className="patient-list">
//                             {searchResults.map(patient => (
//                                 <li key={patient.email} className="patient-result">
//                                     <div className="patient-info">
//                                         <strong>Name:</strong> {patient.first_name} {patient.last_name}
//                                     </div>
//                                     <div className="patient-info">
//                                         <strong>Email:</strong> {patient.email}
//                                     </div>
//                                     <div className="patient-info">
//                                         <strong>Phone:</strong> {patient.phone}
//                                     </div>
//                                     <div className="patient-info">
//                                         <strong>Age:</strong> {patient.age}
//                                     </div>
//                                     <div className="patient-info">
//                                         <strong>Blood Group:</strong> {patient.bloodGroup}
//                                     </div>
//                                     <div className="patient-info">
//                                         <strong>Pain Difficulty:</strong> {patient.pain_difficulty}
//                                     </div>
//                                     <div className="patient-info">
//                                         <strong>Been Diagnosed:</strong> {patient.been_diagnosed}
//                                     </div>
//                                     <div className="patient-info">
//                                         <strong>Description:</strong> {patient.description}
//                                     </div>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ) : (
//                     !isLoading && <p className="no-results">No matching patients found</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default PatientMedicalHistory;
// PatientMedicalHistory.js
// PatientMedicalHistory.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './PatientMedicalHistory.css';

function PatientMedicalHistory() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const doctorEmail = localStorage.getItem("doctor_email");
        if (!doctorEmail) {
            // Redirect to the doctor login page if not authenticated
            navigate("/doctor-login");
        }
    }, [navigate]);

    const handleSearch = () => {
        setIsLoading(true);
        fetch(`http://127.0.0.1:8000/api/search-patient/?query=${searchQuery}`)
            .then(response => response.json())
            .then(data => setSearchResults(data))
            .catch(error => console.error('Error searching patient:', error))
            .finally(() => setIsLoading(false));
    };

    return (
        <div className="medical-history-body">
            <Navbar />
            <div className="patient-medical-history-container">
                <h1 style={{ color: '#000' }}>Patient and Medical Info</h1>
                <div className="search-container">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by name or email"
                        className="search-input"
                    />
                    <button onClick={handleSearch} disabled={isLoading} className="search-button">
                        {isLoading ? 'Searching...' : 'Search'}
                    </button>
                </div>
                {isLoading && <div className="loading-spinner"></div>}
                {searchResults.length > 0 ? (
                    <div className="search-results">
                        {searchResults.map(patient => (
                            <div key={patient.email} className="patient-result">
                                <div className="patient-info">
                                    <div>
                                        <strong>Name:</strong> {patient.first_name} {patient.last_name}
                                    </div>
                                    <div>
                                        <strong>Email:</strong> {patient.email}
                                    </div>
                                    <div>
                                        <strong>Phone:</strong> {patient.phone}
                                    </div>
                                    <div>
                                        <strong>Age:</strong> {patient.age}
                                    </div>
                                    <div>
                                        <strong>Blood Group:</strong> {patient.bloodGroup}
                                    </div>
                                    <div>
                                        <strong>Pain Difficulty:</strong> {patient.pain_difficulty}
                                    </div>
                                    <div>
                                        <strong>Been Diagnosed:</strong> {patient.been_diagnosed}
                                    </div>
                                    <div>
                                        <strong>Description:</strong> {patient.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    !isLoading && <p className="no-results">No matching patients found</p>
                )}
            </div>
        </div>
    );
}

export default PatientMedicalHistory;
