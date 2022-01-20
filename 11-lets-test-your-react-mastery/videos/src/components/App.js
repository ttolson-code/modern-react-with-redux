import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [] };

  onSearchSubmit = async (searchText) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchText
      }
    });

    // console.log(response.data.items);
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className=" ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
};

export default App;