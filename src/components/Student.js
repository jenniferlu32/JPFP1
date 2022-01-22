import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EditStudent from './EditStudent';

class Student extends React.Component {
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
    const student = this.props.students.filter(student => student.id === this.state.student.id)[0];
    if (!student) {
      return <h1>Loading</h1>
    } else {
      return (
        <div>
          <img src={student.imageUrl}></img>
          <h3>{student.firstName} {student.lastName}</h3>
          <p>Email: {student.email}</p>
          <p>GPA: {student.gpa}</p>
          {
            student.campusId ? <p>Campus: <Link to={`/campuses/${student.campusId}`}>{student.campus.name}</Link></p> : <p>Student not enrolled yet!</p>
          }
          <EditStudent student={student} />
        </div>
      )
    }
  };
};

const mapStateToProps = (state) => {
  return {
    students: state.students,
  };
};

export default connect(mapStateToProps, null)(Student);
