import React from 'react';
import { connect } from 'react-redux';
import { addCampus } from '../store/campuses';

class AddCampus extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      description: '',
    };
    this.addCampus = this.addCampus.bind(this);
  };

  addCampus() {
    const campus = this.state;
    this.props.addCampus(campus);
  };

  render() {
    return (
      <div>
        <h3>Add New Campus:</h3>
        <form onSubmit = {(ev) => this.addCampus()}>
          <input placeholder='Name' onChange={(ev) => this.setState({ name: ev.target.value })}></input>
          <input placeholder='Address' onChange={(ev) => this.setState({ address: ev.target.value })}></input>
          <input placeholder='Description' onChange={(ev) => this.setState({ description: ev.target.value })}></input>
          <button>Add Campus</button>
        </form>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCampus: (campus) => dispatch(addCampus(campus))
  };
};

export default connect(null, mapDispatchToProps)(AddCampus);
