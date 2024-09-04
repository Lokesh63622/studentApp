import React, { useState } from 'react';

const StudentForm = ({ classSections, sections, selectedClass, onClassChange, onAddStudent, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [cls, setCls] = useState(selectedClass);
  const [section, setSection] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent({ firstName, lastName, dob, class: cls, section });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add New Student</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </label>
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </label>
          <label>
            Date of Birth:
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
          </label>
          <label>
            Class:
            <select value={cls} onChange={(e) => { setCls(e.target.value); onClassChange(e.target.value); }} required>
              <option value="">Select Class</option>
              {Object.keys(classSections).map(cls => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>
          </label>
          <label>
            Section:
            <select value={section} onChange={(e) => setSection(e.target.value)} required>
              <option value="">Select Section</option>
              {sections.map(sec => (
                <option key={sec} value={sec}>{sec}</option>
              ))}
            </select>
          </label>
          <button type="submit">Add Student</button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
