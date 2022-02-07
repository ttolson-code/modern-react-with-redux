import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

// class SongList extends React.Component {
//   renderList() {
//     return this.props.songs.map((song) => {
//       return (
//         <div className="item" key={song.title}>
//           <div className="right floated content">
//             <button 
//               className="ui button primary"
//               onClick={() => this.props.selectSong(song)}
//             >
//               Select
//             </button>
//           </div>
//           <div className="content">{song.title}</div>
//         </div>
//       );
//     });
//   }

//   render() {
//     return <div className="ui divided list">{this.renderList()}</div>;
//   }
// };

const SongList = ({ songs, selectSong }) => {
  const renderSongList = songs.map((song) => {
    return (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button 
            className="ui button primary"
            onClick={() => selectSong(song)}
          >
            Select
          </button>
        </div>
        <div className="content">{song.title}</div>
      </div>
    );
  });

  return <div className="ui divided list">{renderSongList}</div>;
}

// Convention to name this function mapStateToProps:
// Takes the state object (all data inside of the reduce store), 
// and run some computation so that the data eventually shows up as
// prop inside of our component. That is the meaning of mapStateToProps.
const mapStateToProps = (state) => {
  // console.log(state);

  // This returned object will show up as props in the SongList component.
  return { songs: state.songs };
}

// First set of parens returns a function,
// Second set of parens invokes the function that was returned. 
// Completely valid JavaScript.
// Pass mapStateToProps function to connect() to configure it.
// Passes SongList (state) to mapStateToProps function and invokes it.

// In SongList we are passing both a mapStateToProps argument 
// and mapDispatchToProps argument (The object shorthand form, { selectSong }). 
// This is because we are dispatching an action in this component to update 
// our state as well as accessing the Redux store. 
export default connect(mapStateToProps, { selectSong })(SongList);

// connect() is a react component. 
// We will pass some configuration to this function that tells connect 
// to get a list of songs out of the reduce store from the provider. 
// Any time the list of songs inside of the store changes, 
// the provider is going to automatically notify the connect function 
// and it will pass the updated list of songs down to the song list component
// as props.