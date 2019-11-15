import { combineReducers } from 'redux';
import user from './user';
import student from './student';

export default combineReducers({
  user,
  student,
});
