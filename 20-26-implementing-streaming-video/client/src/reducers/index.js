import { combineReducers } from 'redux';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
  auth: authReducer,
  streams: streamReducer
});

// Reducers:

// A reducer is a function that receives the current state and an action object, 
// decides how to update the state if necessary, and returns the new state: (state, action) => newState.
// You can think of a reducer as an event listener 
// which handles events based on the received action (event) type.

// Reducers must always follow some specific rules:

// They should only calculate the new state value based on the state and action arguments.
// They are not allowed to modify the existing state. 
// Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
// They must not do any asynchronous logic, calculate random values, or cause other "side effects".

// https://redux.js.org/tutorials/essentials/part-1-overview-concepts