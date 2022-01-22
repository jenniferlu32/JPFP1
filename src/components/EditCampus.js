import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { editCampus } from '../store/campuses';

class EditCampus extends React.Component {
  constructor(){
    super();
    this.state = {
      id: 0,
      name: '',
      imageUrl: '',
      address: '',
      description: ''
    };
  };

  async componentDidMount() {
    const campusId = window.location.hash.slice(window.location.hash.length-1);
    const campus = (await axios.get(`/api/campuses/${campusId}`)).data;
    this.setState(campus);
  };

  updateCampus(ev) {
    ev.preventDefault()
    this.props.editCampus(this.state);
  };

  render() {
    const { id, name, address, description } = this.state;
    return (
      <form onSubmit={(ev) => this.updateCampus(ev)}>
        <input value={name} onChange={(ev) => this.setState({ name: ev.target.value})}></input>
        <input value={address} onChange={(ev) => this.setState({ address: ev.target.value})}></input>
        <input value={description} onChange={(ev) => this.setState({ description: ev.target.value})}></input>
        <button>Update</button>
      </form>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    editCampus: (campus) => dispatch(editCampus(campus))
  };
};

export default connect(null, mapDispatchToProps)(EditCampus);
