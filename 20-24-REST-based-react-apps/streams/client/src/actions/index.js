import streams from '../apis/streams';
import history from '../history';
import {
  SIGN_IN, 
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

// Define an asynchronous action creator.
// Any time we make an asynchronous action creator, 
// we are making use of redux-thunk.
export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;

    // Axios post request.
    const response = await streams.post('/streams', { ...formValues, userId });
    
    // Dispatch an action.
    dispatch({ type: CREATE_STREAM, payload: response.data });
    
    // Do some programatic navigation to get the user back to the root route.
    history.push('/');
  };
};

export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get('/streams');

    dispatch({ type: FETCH_STREAMS, payload: response.data });
  };
};

export const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: response.data });
  };
};

export const editStream = (id, formValues) => {
  return async (dispatch) => {
    const response = await streams.put(`/streams/${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: response.data });
  };
};

export const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id });
  };
};