import React from 'react';
import { Link } from 'react-router-dom';
import AddStudent from './AddStudent';

const Students = (props) => {
  const students = props.students;
  return (
    <div>
      <AddStudent />
      {
        students.map(student => {
          let studentCampus = '';
          if (student.campus) {
            studentCampus = `Attends ${student.campus.name}`
          } else {
            studentCampus = 'Not enrolled yet'
          }
          return ([
            <p key={student.id}>{student.firstName} {student.lastName} - {studentCampus}</p>,
            <Link to={`/students/${student.id}`} key={student.id+'name'}>Details for {student.firstName}</Link>,
            <button onClick={() => props.deleteStudent(student.id)}>X</button>
          ])
        })
      }
    </div>
  )
};

export default Students;
