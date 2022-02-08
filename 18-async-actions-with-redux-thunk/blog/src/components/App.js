import React from 'react';
import PostList from './PostList';

const App = () => {
  return (
    <div className="ui container">
      <PostList />
    </div>
  );
};

export default App;


// General Data Loading with Redux

// 1. Component gets rendered onto screen
// 2. Components 'componentDidMount' lifecycle method gets called
// 3. We call action creator from 'componentDidMount'
// 4. Action creator runs code to make an API request
// 5. API responds with data
// 6. Action creator returns an 'action' with the fetched data on the 'payload' property
// 7. Some reducer sees the action, returns the data off the 'payload'
// 8. Because we generated some new state object, redux/react-redux will cause our App to be rerendered.