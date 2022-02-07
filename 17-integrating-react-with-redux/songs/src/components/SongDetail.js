import React from 'react';
import { connect } from 'react-redux';

// When a user clicks the select button in the SongList component,
// an action creator is called which updates a reducer which updates the state 
// inside of the redux store (updated selectedSong). Any time data inside 
// of the redux store is updated by dispatching an action it causes all 
// components that are hooked up to the connect function to automatically
// re-render, thus passing the selected song to the SongDetail component as a prop. 

// SongDetail is subscribed to the redux store via the connect function. 
// Since we are passing it a mapStateToProps function, any time an action 
// is dispatched, some reconciliation will occur to determine if the mapState 
// function should run. The component will re-render if the reconciliation 
// algorithm has determined that the state value has changed.

// You can read up more on this here:
// https://react-redux.js.org/using-react-redux/connect-mapstate

const SongDetail = ({ selectedSong }) => {
  console.log(selectedSong);

  if(!selectedSong) {
    return <div>Select a song</div>
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {selectedSong.title}</p>
      <p>Duration: {selectedSong.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);