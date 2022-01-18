import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component  {
  state = { images: [] };

  onSearchSubmit= async (text) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: text }
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '1rem' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;

// Application flow: 
// - App component renders itself one time with no list of images
// - onSearchSubmit method gets called
// - Rquest made to unsplash API
// - ...wait for response from API
// - Request completes.
// - Set image data in state of App component
// - App component rerenders from state update and shows images
