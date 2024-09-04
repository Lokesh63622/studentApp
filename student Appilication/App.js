import React, { useState, useEffect } from 'react';
import StudentTable from './StudentTable';
import StudentForm from './StudentForm';
import Filters from './Filters';
import './App.css';

const classSections = {
  1: ['A', 'B'],
  2: ['A', 'B', 'C'],
  3: ['A'],
  4: ['A', 'B'],
  5: ['A', 'B', 'C', 'D'],
  6: ['A', 'B', 'C'],
  7: ['A', 'B'],
  8: ['A', 'B', 'C', 'D', 'E'],
  9: ['A', 'B', 'C', 'D'],
  10: ['A', 'B', 'C', 'D', 'E', 'F']
};

const App = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedClass, setSelectedClass] = useState('');
  const [sections, setSections] = useState([]);
  
  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);
    setFilteredStudents(storedStudents);
  }, []);
  
  useEffect(() => {
    setSections(classSections[selectedClass] || []);
  }, [selectedClass]);

  const handleAddStudent = (student) => {
    const newRollNumber = generateRollNumber(student.class, student.section);
    const newStudent = { ...student, rollNumber: newRollNumber };
    
    const updatedStudents = [newStudent, ...students];
    setStudents(updatedStudents);
    setFilteredStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    setShowForm(false);
  };

  const handleSearch = (name, rollNumber) => {
    const filtered = students.filter(student => 
      student.firstName.toLowerCase().includes(name.toLowerCase()) &&
      student.rollNumber.includes(rollNumber)
    );
    setFilteredStudents(filtered);
  };

  const generateRollNumber = (cls, section) => {
    const prefix = cls + section;
    const lastRollNumber = students
      .filter(student => student.rollNumber.startsWith(prefix))
      .map(student => parseInt(student.rollNumber.slice(3)))
      .sort((a, b) => b - a)[0] || 0;
    return prefix + String(lastRollNumber + 1).padStart(3, '0');
  };

  return (
    <div className="App">
      <header>
        <h1>Student Management</h1>
        <Filters onSearch={handleSearch} />
        <button onClick={() => setShowForm(true)}>Add New Student</button>
      </header>
      <StudentTable students={filteredStudents} />
      {showForm && (
        <StudentForm
          classSections={classSections}
          sections={sections}
          selectedClass={selectedClass}
          onClassChange={setSelectedClass}
          onAddStudent={handleAddStudent}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default App;
