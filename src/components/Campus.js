import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditCampus from './EditCampus';

export default class Campus extends React.Component {
  constructor() {
    super();
    this.state = {
      campus: {}
    };
  };

  async componentDidMount() {
    const campusId = window.location.hash.slice(window.location.hash.length-1);
    const campus = (await axios.get(`/api/campuses/${campusId}`)).data;
    this.setState({ campus });
  }

  render() {
    const campus = this.state.campus;
    return (
      <div>
        <img key={campus.id+'image'} src={campus.imageUrl}></img>
        <h3 key={campus.id+'name'}>{campus.name}</h3>
        <p key={campus.id+'address'}>Address: {campus.address}</p>
        <p key={campus.id+'description'}>Description: {campus.description}</p>
        <h3>Enrollees:</h3>
        <ul>
        {
          campus.students && campus.students.length > 0 ? campus.students.map(student => {
            return (
              <Link key={student.id+'name'} to={`/students/${student.id}`}><li key={student.id+'name'}>{student.firstName}</li></Link>
            )
          }) : <p>This campus has no students!</p>
        }
        </ul>
        <EditCampus campus={campus} />
      </div>
    )
  };
};
