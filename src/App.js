// // import React, { useState } from "react";
// import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
//       <header className="App-header">
//         <p>
//           Assigment2
//         </p>
//       </header>
// //     </div>
// //   );
// // }

// // export default App;




// function App() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [tableData, setTableData] = useState([]);

//   const handleFirstNameChange = (event) => {
//     setFirstName(event.target.value);
//   };

//   const handleLastNameChange = (event) => {
//     setLastName(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setTableData([...tableData, { firstName, lastName }]);
//     setFirstName("");
//     setLastName("");
//   };

//   return (
//     <div>
//       <header className="App-header">
//         <p>
//           Assigment2
//         </p>
//       </header>
//       <form onSubmit={handleSubmit}>
//         <label>
//           First Name:
//           <input type="text" value={firstName} onChange={handleFirstNameChange} />
//         </label>
//         <br />
//         <label>
//           Last Name:
//           <input type="text" value={lastName} onChange={handleLastNameChange} />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//       <br />
//       <table>
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((data, index) => (
//             <tr key={index}>
//               <td>{data.firstName}</td>
//               <td>{data.lastName}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;


// import React from "react";
 import NameTable from "./component/home"
import { BrowserRouter, Routes, Route } from "react-router-dom";

 function App(){
  return (
   <BrowserRouter>
   <Routes>
<Route path="/" element={<NameTable />} />
</Routes>
    
</BrowserRouter>
  );
}

export default App;


