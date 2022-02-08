import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  // Bad approach!!! Breaks rules of redux (action creator)
  // const response = await jsonPlaceholder.get('/posts');
  
  // Must wrap logic in a function (redux-thunk)!
  // redux-thunk will pass along action objects to reducers,
  // however if it is a function it will call the function with
  // 'dispatch' and 'getState' functions as arguments.
  // We will wait for our request to finish and then, 
  // MANUALLY dispatch our action. The returned action object will get 
  // passed back to redux-thunk and this time passed along to the reducers.
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    // If you want to work with asynchronous action creators you must
    // ultilize middleware (redux-thunk).
  
    // Middleware in redux: 
    // - Function that gets called withe very action we dispatch
    // - Has the ability to STOP, MODIFY, or otherwise alter actions
    // - Tons of open source middleware exist
    // - Most popular use of middleware is for deal with async action
    // - We are utlizing 'redux-thunk'
  
    dispatch({ type: 'FETCH_POSTS', payload: response })
  };
};