import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';


// Always return a NEW object! Redux requirement.
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return action.payload.reduce((object, element) => { return {...object, [element.id]: element}}, {...state});
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      // Alternative code:
      // const newState = { ...state };
      // newState[action.payload.id] = action.payload;
      // return newState;

      // Return a new state object, spread the current state object, 
      // use key interpolation syntax to add a new key/value pair to the object.
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      // Create new instance of state object.
      const newState = { ...state };
      // Remove property/record from new state object.
      delete newState[action.payload]
      // Return new state object with property/record removed.
      return newState;
    default:
      return state;
  }
}