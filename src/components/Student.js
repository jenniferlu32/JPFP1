import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Student extends React.Component {
  constructor() {
    super();
    this.state = {
      student: {},
    };
  };

  async componentDidMount() {
    const studentId = window.location.hash.slice(window.location.hash.length-1);
    const student = (await axios.get(`/api/students/${studentId}`)).data;
    this.setState({ student })
  };

  render() {
    const { student } = this.state;
    return (
      <div>
        <img src={student.imageUrl}></img>
        <h3>{student.firstName} {student.lastName}</h3>
        <p>Email: {student.email}</p>
        <p>GPA: {student.gpa}</p>
        {
          student.campusId ? <p>Campus: <Link to={`/campuses/${student.campusId}`}>{student.campus.name}</Link></p> : <p>Student not enrolled yet!</p>
        }
      </div>
    )
  };
};
