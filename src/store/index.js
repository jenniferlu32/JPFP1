import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loggingMiddleware from 'redux-logger';

//reducers
import campusReducer from './campuses';
import studentReducer from './students';

const rootReducer = combineReducers({
  campuses: campusReducer,
  students: studentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, loggingMiddleware));

export default store;
