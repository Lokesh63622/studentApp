import React, { useState } from 'react';

const Filters = ({ onSearch }) => {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');

  const handleSearch = () => {
    onSearch(name, rollNumber);
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by Roll Number"
        value={rollNumber}
        onChange={(e) => setRollNumber(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Filters;
