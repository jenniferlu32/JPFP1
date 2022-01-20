import React from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../store/students';

class AddStudent extends React.Component {
  constructor() {
    super();
    this.state = {
      campuses: [],
      firstName: '',
      lastName: '',
      email: '',
      campusId: 0,
    };
  };

  componentDidMount(){
    this.setState({ campuses: this.props.campuses });
  };

  addStudent(){
    const { firstName, lastName, email } = this.state;
    const student = { firstName, lastName, email };
    this.props.addStudent(student);
  };

  render() {
    const { campuses } = this.state;
    return (
      <form onSubmit={() => this.addStudent()}>
        <input placeholder='First name' onChange={(ev) => this.setState({ firstName: ev.target.value })}></input>
        <input placeholder='Last name' onChange={(ev) => this.setState({ lastName: ev.target.value })}></input>
        <input placeholder='Email' onChange={(ev) => this.setState({ email: ev.target.value })}></input>
        <select onChange={(ev) => this.setState({ campusId: parseInt(ev.target.value) })}>
          <option>(Select Campus)</option>
          {
            campuses.map(campus => {
              return (
                <option key={campus.id+'add'} value={campus.id}>{campus.name}</option>
              )
            })
          }
        </select>
        <button>Add Student</button>
      </form>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (student) => dispatch(addStudent(student))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);
