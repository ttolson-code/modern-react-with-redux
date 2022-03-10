import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';


// Always return a NEW object!
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return action.payload.reduce((object, element) => { return {...object, [element.id]: element}}, {...state});
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      const { [action]: payload, ...newStream } = state;
      return newStream;
    default:
      return state;
  }
}