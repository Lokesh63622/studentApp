import React from 'react';

const StudentTable = ({ students }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Class</th>
          <th>Section</th>
          <th>Roll Number</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.rollNumber}>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.dob}</td>
            <td>{student.class}</td>
            <td>{student.section}</td>
            <td>{student.rollNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
