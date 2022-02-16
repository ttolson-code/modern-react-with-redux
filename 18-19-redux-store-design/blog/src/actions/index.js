import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => {
  return async(dispatch, getState) => {
    /* When we call an action creator from inside of an action creator
    we need to make sure that we dispatch the result of calling
    the action creator. */
    await dispatch(fetchPosts());
    
    const userIds = new Set(getState().posts.map(post => post.userId));
    userIds.forEach(id => dispatch(fetchUser(id)));
  };
};

export const fetchPosts = () => {
  // Must wrap logic in a function (redux-thunk). redux-thunk will pass along action 
  // objects to reducers, however if it is a function it will call the function with
  // 'dispatch' and 'getState' functions as arguments. Will wait for our request to 
  // finish and then, MANUALLY dispatch our action. The returned action object will get 
  // passed back to redux-thunk and this time passed along to the reducers.
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
  
    dispatch({ type: 'FETCH_POSTS', payload: response.data })
  };
};

export const fetchUser = (id) => {
  return async(dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data })
  };
};

/*

Middleware in Redux:
- Function that gets called with every action we dispatch.
- Has the ability to STOP, MODIFY, or otherwise alter actions.
- Tons of open source middleware exist.
- Most popular use of middleware is for dealing with async actions.
- This project is utlizing 'redux-thunk'.

In order to work with asynchronous action creators you must ultilize middleware (redux-thunk).

*/