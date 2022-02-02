import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit}) => {
  const [searchText, setSearchText] = useState('');

  const onInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(searchText);
  };

  return (
    <div className="ui segment search-bar">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Seach:</label>
          <input
            type="text" 
            value={searchText}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;