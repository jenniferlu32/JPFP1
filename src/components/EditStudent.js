import React from 'react';
import { connect } from 'react-redux';
import { editStudent } from '../store/students';

class EditStudent extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: ''
    };
  };

  componentDidMount() {
    this.setState(this.props.student);
  };

  editStudent(student) {
    this.props.editStudent(student);
  }

  render() {
    const { firstName, lastName, email, gpa } = this.state;
    return (
      <form onSubmit={() => this.editStudent(this.state)}>
        <input value={firstName} onChange={(ev) => this.setState({ firstName: ev.target.value })}></input>
        <input value={lastName} onChange={(ev) => this.setState({ lastName: ev.target.value })}></input>
        <input value={email} onChange={(ev) => this.setState({ email: ev.target.value })}></input>
        <input value={gpa} onChange={(ev) => this.setState({ gpa: ev.target.value })}></input>
        <button>Update</button>
      </form>
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editStudent: (student) => dispatch(editStudent(student))
  };
};

export default connect(null, mapDispatchToProps)(EditStudent);
