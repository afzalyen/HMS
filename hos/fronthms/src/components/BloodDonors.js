

// import React, { useState } from 'react';
// import './BloodDonors.css';

// const BloodDonors = () => {
//   const [formData, setFormData] = useState({
//     first_name: '',
//     last_name: '',
//     phone: '',
//     email: '',
//     blood_group: '',
//     dob: '',
//     sex: '',
//     address: '',
//     previous_donation: 'no',
//     last_donation_date: null,
//   });

//   const [formStatus, setFormStatus] = useState(null);

//   const handleChange = (e) => {
//     const { id, value, type, checked } = e.target;
//     const fieldValue = type === 'checkbox' ? checked : value;

//     const updatedFormData = id === 'previous_donation' && fieldValue === 'no'
//       ? { ...formData, last_donation_date: null }
//       : { ...formData, [id]: fieldValue };

//     setFormData(updatedFormData);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch('http://127.0.0.1:8000/api/blood-donors/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => {
//         if (response.ok) {
//           setFormStatus('success');
//           setFormData({
//             first_name: '',
//             last_name: '',
//             phone: '',
//             email: '',
//             blood_group: '',
//             dob: '',
//             sex: '',
//             address: '',
//             previous_donation: 'no',
//             last_donation_date: null,
//           });
//         } else {
//           setFormStatus('error');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         setFormStatus('error');
//       });
//   };

//   return (
//     <div className="blood-donor-container">
//       <div className="content-wrapper">
//         <form onSubmit={handleSubmit} className="blood-donor-form">
//           <h2 className="blood-donor-title">Blood Donor Information</h2>

//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="first_name">First Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="first_name"
//                 value={formData.first_name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="last_name">Last Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="last_name"
//                 value={formData.last_name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="phone">Phone Number</label>
//               <input
//                 type="tel"
//                 className="form-control"
//                 id="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="blood_group">Blood Group</label>
//               <select
//                 className="form-control"
//                 id="blood_group"
//                 value={formData.blood_group}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="" disabled>Select Blood Group</option>
//                 <option value="A+">A+</option>
//                 <option value="B+">B+</option>
//                 <option value="O+">O+</option>
//                 <option value="AB+">AB+</option>
//                 <option value="A-">A-</option>
//                 <option value="B-">B-</option>
//                 <option value="O-">O-</option>
//                 <option value="AB-">AB-</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="dob">Date of Birth</label>
//               <input
//                 type="date"
//                 className="form-control"
//                 id="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="sex">Sex</label>
//               <select
//                 className="form-control"
//                 id="sex"
//                 value={formData.sex}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="" disabled>Select Sex</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="address">Address</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="previous_donation">Have you donated previously?</label>
//               <select
//                 className="form-control"
//                 id="previous_donation"
//                 value={formData.previous_donation}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="no">No</option>
//                 <option value="yes">Yes</option>
//               </select>
//             </div>
//             {formData.previous_donation === 'yes' && (
//               <div className="form-group">
//                 <label htmlFor="last_donation_date">Last Donation Date</label>
//                 <input
//                   type="date"
//                   className="form-control"
//                   id="last_donation_date"
//                   value={formData.last_donation_date || ''}
//                   onChange={handleChange}
//                 />
//               </div>
//             )}
//           </div>

//           {formStatus && (
//             <div
//               className={`alert ${formStatus === 'success' ? 'alert-success' : 'alert-danger'}`}
//               role="alert"
//             >
//               {formStatus === 'success'
//                 ? 'Form submitted successfully!'
//                 : 'You cannot donate more than 1 bag'}
//             </div>
//           )}

//           <button className="btn-primary" type="submit">
//             Submit Form
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BloodDonors;






// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import './BloodDonors.css';

// const BloodDonors = () => {
//   const [formData, setFormData] = useState({
//     first_name: '',
//     last_name: '',
//     phone: '',
//     email: '',
//     blood_group: '',
//     dob: '',
//     sex: '',
//     address: '',
//     previous_donation: 'no',
//     last_donation_date: null,
//   });

//   const [formStatus, setFormStatus] = useState(null);

//   const handleChange = (e) => {
//     const { id, value, type, checked } = e.target;
//     const fieldValue = type === 'checkbox' ? checked : value;

//     const updatedFormData = id === 'previous_donation' && fieldValue === 'no'
//       ? { ...formData, last_donation_date: null }
//       : { ...formData, [id]: fieldValue };

//     setFormData(updatedFormData);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Assuming you have a backend endpoint for handling donor registration
//     fetch('http://127.0.0.1:8000/api/blood-donors/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => {
//         if (response.ok) {
//           setFormStatus('success');
//           setFormData({
//             first_name: '',
//             last_name: '',
//             phone: '',
//             email: '',
//             blood_group: '',
//             dob: '',
//             sex: '',
//             address: '',
//             previous_donation: 'no',
//             last_donation_date: null,
//           });
//         } else {
//           setFormStatus('error');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         setFormStatus('error');
//       });
//   };

//   return (
//     <div>
//       <Navbar   includeBloodHomeLink includeBloodBankHomeLink includeBloodSupportLink includeBloodAboutLink/>
//       <div className="blood-donor-container">
//         <div className="content-wrapper">
//           <form onSubmit={handleSubmit} className="blood-donor-form">
//             <h2 className="blood-donor-title">রক্তদাতা তথ্য</h2>

//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="first_name">প্রথম নাম</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="first_name"
//                   value={formData.first_name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="last_name">শেষ নাম</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="last_name"
//                   value={formData.last_name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="phone">ফোন নম্বর</label>
//               <input
//                 type="tel"
//                 className="form-control"
//                 id="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">ইমেইল</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="blood_group">রক্তের গ্রুপ</label>
//               <select
//                 className="form-control"
//                 id="blood_group"
//                 value={formData.blood_group}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="" disabled>রক্তের গ্রুপ নির্বাচন করুন</option>
//                 <option value="A+">A+</option>
//                 <option value="B+">B+</option>
//                 <option value="O+">O+</option>
//                 <option value="AB+">AB+</option>
//                 <option value="A-">A-</option>
//                 <option value="B-">B-</option>
//                 <option value="O-">O-</option>
//                 <option value="AB-">AB-</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="dob">জন্ম তারিখ</label>
//               <input
//                 type="date"
//                 className="form-control"
//                 id="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="sex">লিঙ্গ</label>
//               <select
//                 className="form-control"
//                 id="sex"
//                 value={formData.sex}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="" disabled>লিঙ্গ নির্বাচন করুন</option>
//                 <option value="male">পুরুষ</option>
//                 <option value="female">মহিলা</option>
//                 <option value="other">অন্যান্য</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="address">ঠিকানা</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="previous_donation">আপনি আগে কখনো রক্ত দিয়েছেন?</label>
//               <select
//                 className="form-control"
//                 id="previous_donation"
//                 value={formData.previous_donation}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="no">না</option>
//                 <option value="yes">হ্যাঁ</option>
//               </select>
//             </div>
//             {formData.previous_donation === 'yes' && (
//               <div className="form-group">
//                 <label htmlFor="last_donation_date">শেষ দানের তারিখ</label>
//                 <input
//                   type="date"
//                   className="form-control"
//                   id="last_donation_date"
//                   value={formData.last_donation_date || ''}
//                   onChange={handleChange}
//                 />
//               </div>
//             )}
//           </div>

//           {formStatus && (
//               <div
//                 className={`alert ${formStatus === 'success' ? 'alert-success' : 'alert-danger'}`}
//                 role="alert"
//               >
//          {formStatus === 'success'
//                   ? 'ফর্মটি সফলভাবে জমা দেয়া হয়েছে!'
//                   : 'তিন মাসের মধ্যে রক্ত দান করা যাবেনা'}
//               </div>
//             )}

//             <button className="btn-primary" type="submit">
//               ফর্ম জমা দিন
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BloodDonors;

import React, { useState } from 'react';
import Navbar from './Navbar';
import './BloodDonors.css';

const BloodDonors = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    blood_group: '',
    dob: '',
    sex: '',
    address: '',
    previous_donation: 'no',
    last_donation_date: null,
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    const updatedFormData = id === 'previous_donation' && fieldValue === 'no'
      ? { ...formData, last_donation_date: null }
      : { ...formData, [id]: fieldValue };

    setFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you have a backend endpoint for handling donor registration
    fetch('http://127.0.0.1:8000/api/blood-donors/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setFormStatus('success');
          setFormData({
            first_name: '',
            last_name: '',
            phone: '',
            email: '',
            blood_group: '',
            dob: '',
            sex: '',
            address: '',
            previous_donation: 'no',
            last_donation_date: null,
          });
        } else {
          setFormStatus('error');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        setFormStatus('error');
      });
  };

  return (
    <div>
      <Navbar includeHomeLink includeBloodBankLink includeSupportLink includeAboutLink />
      <div className="blood-donor-container">
        <div className="content-wrapper">
          <form onSubmit={handleSubmit} className="blood-donor-form">
            <h2 className="blood-donor-title">Blood Donor Information</h2>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="blood_group">Blood Group</label>
                <select
                  className="form-control"
                  id="blood_group"
                  value={formData.blood_group}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="O+">O+</option>
                  <option value="AB+">AB+</option>
                  <option value="A-">A-</option>
                  <option value="B-">B-</option>
                  <option value="O-">O-</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="sex">Gender</label>
                <select
                  className="form-control"
                  id="sex"
                  value={formData.sex}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="previous_donation">Have you donated blood before?</label>
                <select
                  className="form-control"
                  id="previous_donation"
                  value={formData.previous_donation}
                  onChange={handleChange}
                  required
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              {formData.previous_donation === 'yes' && (
                <div className="form-group">
                  <label htmlFor="last_donation_date">Last Donation Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="last_donation_date"
                    value={formData.last_donation_date || ''}
                    onChange={handleChange}
                  />
                </div>
              )}
            </div>

            {formStatus && (
              <div
                className={`alert ${formStatus === 'success' ? 'alert-success' : 'alert-danger'}`}
                role="alert"
              >
                {formStatus === 'success'
                  ? 'The form has been successfully submitted!'
                  : 'You cannot donate blood within three months.'}
              </div>
            )}

            <button className="btn-primary" type="submit">
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BloodDonors;
