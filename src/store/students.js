import axios from 'axios';

//action type constants
const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

//action creaters
const _getStudents = (students) => {
  return {
    type: GET_STUDENTS,
    payload: students
  };
};

const _addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    payload: student,
  };
};

const _deleteStudent = (studentId) => {
  return {
    type: DELETE_STUDENT,
    payload: studentId
  };
};

//thunks
export const getStudents = () => {
  return async(dispatch) => {
    const students = (await axios.get('/api/students')).data;
    dispatch(_getStudents(students));
  };
};

export const addStudent = (student) => {
  return async(dispatch) => {
    const newStudent = (await axios.post('/api/students', student)).data;
    dispatch(_addStudent(newStudent));
  };
};

export const deleteStudent = (studentId) => {
  return async(dispatch) => {
    await axios.delete(`api/students/${studentId}`);
    dispatch(_deleteStudent(studentId));
  };
};

//reducers
export default function studentReducer(state = [], action) {
  switch(action.type) {
    case GET_STUDENTS:
      return action.payload;
    case ADD_STUDENT:
      return [...state, action.payload];
    case DELETE_STUDENT:
      return state.filter(student => student.id !== action.payload);
    default:
      return state;
  };
};
