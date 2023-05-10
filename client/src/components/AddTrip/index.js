// components/AddTrip.js
import React, { useState } from 'react';
//import AddMap from '../AddMap';

const AddTrip = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [manager, setManager] = useState('');
  const [approved, setApproved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ firstName, lastName, fromDate, toDate, manager, approved });
  };

  return (
    <>
    <h1>All Trips</h1>
    <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0.5rem', alignItems: 'center' }}>
      
      <label htmlFor="firstName">First Name:</label>
      <input id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />

      <label htmlFor="fromDate">From Date:</label>
      <input id="fromDate" type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />

      <label htmlFor="toDate">To Date:</label>
      <input id="toDate" type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />

      <label htmlFor="manager">Manager:</label>
      <input id="manager" type="text" value={manager} onChange={(e) => setManager(e.target.value)} />

      <label htmlFor="approved">Approved:</label>
      <input id="approved" type="checkbox" checked={approved} onChange={() => setApproved(!approved)} />

      <button type="submit" style={{ gridColumn: 'span 2' }}>Submit</button>
    </form>
      {/* <div style={{ width: '100%', height: '400px' }}>
              {<AddMap />}
     </div> */}
    </>
  );
};

export default AddTrip;


// //===================================================
// // components/AddTrip.js
// import React, { useState } from 'react';
// //import AddMap from '../AddMap';

// const AddTrip = ({ onSubmit }) => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [manager, setManager] = useState('');
//   const [approved, setApproved] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ firstName, lastName, fromDate, toDate, manager, approved });
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0.5rem', alignItems: 'center' }}>
//         <label htmlFor="firstName">First Name:</label>
//         <input id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

//         <label htmlFor="lastName">Last Name:</label>
//         <input id="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />

//         <label htmlFor="fromDate">From Date:</label>
//         <input id="fromDate" type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />

//         <label htmlFor="toDate">To Date:</label>
//         <input id="toDate" type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />

//         <label htmlFor="manager">Manager:</label>
//         <input id="manager" type="text" value={manager} onChange={(e) => setManager(e.target.value)} />

//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <input id="approved" type="checkbox" checked={approved} onChange={() => setApproved(!approved)} />
//           <label htmlFor="approved" style={{ marginLeft: '0.5rem' }}>Approved:</label>
//         </div>

//         <button type="submit" style={{ gridColumn: 'span 2' }}>Submit</button>
//       </form>
//       {/* <div style={{ width: '100%', height: '400px' }}>
//         <AddMap />
//       </div> */}
//     </>
//   );
// };

// export default AddTrip;