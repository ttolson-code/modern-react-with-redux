import React from 'react';

class SearchBar extends React.Component {
  state = {searchText: '' };
  
  // Assign these callbacks with arrow functions because they
  // will be passed to a child element.
  onInputChange = (event) => {
    this.setState({ searchText: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSearchSubmit(this.state.searchText);
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Seach:</label>
            <input
              type="text" 
              value={this.state.searchText}
              onChange={this.onInputChange}
            />
         </div>
       </form>
      </div>
    );
  }
}

export default SearchBar;