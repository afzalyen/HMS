// // PatientBlood.js
// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import './BloodGroup.css';

// const BloodGroup = () => {
//   const [patients, setPatients] = useState([]);
//   const [bloodDonors, setBloodDonors] = useState([]);
//   const [selectedSection, setSelectedSection] = useState('patients');

//   useEffect(() => {
//     fetch('http://127.0.0.1:8000/api/patient-blood-details/')
//       .then((response) => response.json())
//       .then((data) => setPatients(data))
//       .catch((error) => console.error('Error:', error));

//     fetch('http://127.0.0.1:8000/api/blood-donors-details/')
//       .then((response) => response.json())
//       .then((data) => setBloodDonors(data))
//       .catch((error) => console.error('Error:', error));
//   }, []);

//   const handleSectionChange = (section) => {
//     setSelectedSection(section);
//   };

//   return (
//     <div>
//       <Navbar   includeBloodHomeLink includeBloodBankHomeLink includeBloodSupportLink includeBloodAboutLink/>
//       <div className="blood-group-container">
//         <div className="section-buttons">
//           <button
//             className={selectedSection === 'patients' ? 'active' : ''}
//             onClick={() => handleSectionChange('patients')}
//           >
//             রোগীবর্গ
//           </button>
//           <button
//             className={selectedSection === 'donors' ? 'active' : ''}
//             onClick={() => handleSectionChange('donors')}
//           >
//             রক্তদাতাবর্গ
//           </button>
//         </div>

//         <div className="table-container">
//           <table className="blood-details-table">
//             <thead>
//               <tr>
//                 <th>নাম</th>
//                 <th>ফোন</th>
//                 <th>ইমেইল</th>
//                 <th>রক্ত গ্রুপ</th>
//               </tr>
//             </thead>
//             <tbody>
//               {(selectedSection === 'patients' ? patients : bloodDonors).map((person) => (
//                 <tr key={person.email}>
//                   <td>{`${person.first_name} ${person.last_name}`}</td>
//                   <td>{person.phone}</td>
//                   <td>{person.email}</td>
//                   <td>{selectedSection === 'patients' ? person.bloodGroup : person.blood_group}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BloodGroup;
// BloodGroup.js
// BloodGroup.js
// BloodGroup.js
// BloodGroup.js// BloodGroup.js
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './BloodGroup.css';

const BloodGroup = () => {
  const [patients, setPatients] = useState([]);
  const [bloodDonors, setBloodDonors] = useState([]);
  const [selectedSection, setSelectedSection] = useState('patients');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/patient-blood-details/')
      .then((response) => response.json())
      .then((data) => setPatients(data))
      .catch((error) => console.error('Error:', error));

    fetch('http://127.0.0.1:8000/api/blood-donors-details/')
      .then((response) => response.json())
      .then((data) => setBloodDonors(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
      <Navbar includeBloodHomeLink includeBloodBankHomeLink includeBloodSupportLink includeBloodAboutLink />
      <div className="blood-group-container">
        <div className="section-buttons">
          <button
            className={selectedSection === 'patients' ? 'active' : ''}
            onClick={() => handleSectionChange('patients')}
          >
            Patients
          </button>
          <button
            className={selectedSection === 'donors' ? 'active' : ''}
            onClick={() => handleSectionChange('donors')}
          >
            Blood Donors
          </button>
        </div>

        <div className="table-container">
          <table className="blood-details-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Blood Group</th>
              </tr>
            </thead>
            <tbody>
              {(selectedSection === 'patients' ? patients : bloodDonors).map((person) => (
                <tr key={person.email}>
                  <td>{`${person.first_name} ${person.last_name}`}</td>
                  <td>{person.phone}</td>
                  <td>{person.email}</td>
                  <td>{selectedSection === 'patients' ? person.bloodGroup : person.blood_group}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BloodGroup;
