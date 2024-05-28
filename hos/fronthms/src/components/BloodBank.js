// // BloodBank.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
// import './BloodBank.css';
// import bloodDonorImage from '../assets/blooddonor.png';
// import bloodAvailabilityImage from '../assets/bloodavail.png';
// import bloodRecipientImage from '../assets/bloodrequest.png';
// import bloodGroupImage from '../assets/bloodgroup.png';
// import bloodBankImage from '../assets/bloodbank.png';

// const BloodBank = () => {
//   const cardData = [
//     {
//       title: 'Blood Donors',
//       text: 'Information about blood donors.',
//       image: bloodDonorImage,
//       link: '/blood-donors',
//     },
//     {
//       title: 'Blood Availability',
//       text: 'Check blood availability by group.',
//       image: bloodAvailabilityImage,
//       link: '/blood-availability',
//     },
//     {
//       title: 'Blood Recipients',
//       text: 'Information & Request for Blood',
//       image: bloodRecipientImage,
//       link: '/blood-recipients',
//     },
//     {
//       title: 'Blood Details',
//       text: 'Details about blood groups of Patients.',
//       image: bloodGroupImage,
//       link: '/blood-group',
//     },
//   ];

//   return (
//     <div className="blood-bank-container">
//       <Navbar includeHomeLink includeAboutLink includeSupportLink />
//       <div className="blood-bank-content">
//         <div className="container mt-4"> {/* Adjusted margin-top */}
//           <div className="text-center">
//             <img src={bloodBankImage} alt="Blood Bank" className="blood-bank-image" />
//           </div>

//           <h1 className="blood-bank-title">Blood Bank</h1>
//           <h2 className="blood-bank-subtitle">Your Blood Donation Dashboard</h2>

//           <div className="additional-info mt-2">
//             <p>Welcome to the Blood Bank Dashboard. Find information about blood donors, check blood availability, learn about blood recipients, and view details of registered patients.</p>
//           </div>

//           <div className="row mt-3">
//             {cardData.map((card, index) => (
//               <div key={index} className="col-md-6 col-lg-3 mb-4">
//                 <Link to={card.link} className="card-link">
//                   <div className="card gradient-card">
//                     <div className="card-body">
//                       <img src={card.image} alt={card.title} className="card-image" />
//                       <h5 className="card-title">{card.title}</h5>
//                       <p className="card-text">{card.text}</p>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BloodBank;
// BloodBank.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
// import './BloodBank.css';
// import bloodDonorImage from '../assets/blooddonor.png';
// import bloodAvailabilityImage from '../assets/bloodavail.png';
// import bloodRecipientImage from '../assets/bloodrequest.png';
// import bloodGroupImage from '../assets/bloodgroup.png';
// import bloodBankImage from '../assets/bloodbank.png';

// const BloodBank = () => {
//   const cardData = [
//     {
//       title: 'রক্ত দাতা',
//       text: 'রক্ত দান করার জন্য আবেদন.',
//       image: bloodDonorImage,
//       link: '/blood-donors',
//     },
//     {
//       title: 'রক্ত উপলব্ধতা',
//       text: 'রক্ত গ্রুপ অনুযায়ী  উপলব্ধতা খোঁজ করুন.',
//       image: bloodAvailabilityImage,
//       link: '/blood-availability',
//     },
//     {
//       title: 'রক্ত গ্রহীতা ',
//       text: 'রক্ত গ্রহণের জন্য আবেদেন',
//       image: bloodRecipientImage,
//       link: '/blood-recipients',
//     },
//     {
//       title: 'রক্ত গ্রুপ সংক্রান্ত তথ্য',
//       text: 'রোগী এবং রক্তদাতাদের রক্ত গ্রুপের খোঁজ করুন.',
//       image: bloodGroupImage,
//       link: '/blood-group',
//     },
//   ];
//   return (
//     <div className="blood-bank-container">
//       <Navbar  includeBloodHomeLink includeBloodBankHomeLink includeBloodSupportLink includeBloodAboutLink />
//       <div className="blood-bank-content">
//         <div className="container mt-4"> 
//           <div className="text-center">
//             <img src={bloodBankImage} alt="ব্লাড ব্যাংক" className="blood-bank-image" />
//           </div>

//           <h1 className="blood-bank-title">ব্লাড ব্যাংক</h1>
//           <h2 className="blood-bank-subtitle">আপনার রক্তদান ড্যাশবোর্ড</h2>

//           <div className="additional-info mt-2">
//             <p>ব্লাড ব্যাংক ড্যাশবোর্ডে আপনাকে স্বাগতম। রক্তদাতাদের তথ্য খুঁজে পান, রক্ত উপলব্ধতা চেক করুন, রক্ত প্রাপকদের সম্পর্কে জানুন, এবং নিবন্ধিত রোগীদের বিস্তারিত দেখুন।</p>
//           </div>

//           <div className="row mt-3">
//             {cardData.map((card, index) => (
//               <div key={index} className="col-md-6 col-lg-3 mb-4">
//                 <Link to={card.link} className="card-link">
//                   <div className="card gradient-card">
//                     <div className="card-body">
//                       <img src={card.image} alt={card.title} className="card-image" />
//                       <h5 className="card-title">{card.title}</h5>
//                       <p className="card-text">{card.text}</p>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BloodBank;
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './BloodBank.css';
import bloodDonorImage from '../assets/blooddonor.png';
import bloodAvailabilityImage from '../assets/bloodavail.png';
import bloodRecipientImage from '../assets/bloodrequest.png';
import bloodGroupImage from '../assets/bloodgroup.png';
import bloodBankImage from '../assets/bloodbank.png';

const BloodBank = () => {
  const cardData = [
    {
      title: 'Blood Donor',
      text: 'Apply for blood donation.',
      image: bloodDonorImage,
      link: '/blood-donors',
    },
    {
      title: 'Blood Availability',
      text: 'Search for availability based on blood group.',
      image: bloodAvailabilityImage,
      link: '/blood-availability',
    },
    {
      title: 'Blood Recipient',
      text: 'Apply for blood reception.',
      image: bloodRecipientImage,
      link: '/blood-recipients',
    },
    {
      title: 'Blood Group Information',
      text: 'Search for information about patient and blood donor blood groups.',
      image: bloodGroupImage,
      link: '/blood-group',
    },
  ];
  return (
    <div className="blood-bank-container">
      <Navbar includHomeLink includeBloodBankLink includeSupportLink includeAboutLink />
      <div className="blood-bank-content">
        <div className="container mt-4">
          <div className="text-center">
            <img src={bloodBankImage} alt="Blood Bank" className="blood-bank-image" />
          </div>

          <h1 className="blood-bank-title">Blood Bank</h1>
          <h2 className="blood-bank-subtitle">Your Blood Donation Dashboard</h2>

          <div className="additional-info mt-2">
            <p>Welcome to the Blood Bank Dashboard! Find information about blood donors, check blood availability, learn about blood recipients, and view detailed information about registered patients.</p>
          </div>

          <div className="row mt-3">
            {cardData.map((card, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <Link to={card.link} className="card-link">
                  <div className="card gradient-card">
                    <div className="card-body">
                      <img src={card.image} alt={card.title} className="card-image" />
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-text">{card.text}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodBank;
