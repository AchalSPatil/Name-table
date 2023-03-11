import React, { useState, useEffect } from 'react';
import './home.css';

function NameTable() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nameList, setNameList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameList([...nameList, { firstName, lastName }]);
    setFirstName('');
    setLastName('');
  };

  useEffect(() => {
    const names = JSON.parse(localStorage.getItem('names'));
    if (names) {
      setNameList(names);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('names', JSON.stringify(nameList));
  }, [nameList]);

  return (
    <div id ="home">
        <header className="App-header">
       <p>
          Assigment2
        </p>
       </header>
      <h1>Name Table</h1>
      <form onSubmit={handleSubmit}>
        <label className='label' htmlFor="firstName">First Name:</label>
        <input  type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <br />
        <label className='label' htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <br />
        <button className="button" type="submit">Submit</button>
      </form>
      <br />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {nameList.map((name, index) => (
            <tr key={index}>
              <td>{name.firstName}</td>
              <td>{name.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NameTable;