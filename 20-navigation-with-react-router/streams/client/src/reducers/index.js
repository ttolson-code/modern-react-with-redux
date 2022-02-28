import { combineReducers } from 'redux';
// Rename reducer variable from redux-form to avoid confusion
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer
});