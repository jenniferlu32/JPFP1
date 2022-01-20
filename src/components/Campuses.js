import React from 'react';
import { Link }from 'react-router-dom';

//components
import AddCampus from './AddCampus';

const Campuses = (props) => {
  return (
    <div>
      <AddCampus />
      <div>
        {
          props.campuses.map(campus => {
            let enrollment = '';
            if (campus.students) {
              if (campus.students.length < 2) {
                enrollment = `${campus.students.length} enrollment`
              } else {
                enrollment = `${campus.students.length} enrollments`
              };
            } else {
              enrollment = '0 enrollment'
            }
            return ([
              <h3 key={campus.id+'name'}>{campus.name} ({enrollment})</h3>,
              <Link key={campus.id} to={`/campuses/${campus.id}`}>Details for {campus.name}</Link>,
              <button onClick={() => props.deleteCampus(campus.id)}>X</button>
            ]
            )
          })
        }
      </div>
    </div>
  )
};

export default Campuses;
