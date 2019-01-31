import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <a href='www.#.com'>SEARCH</a>
      </div>
    )
  }
};

export default SearchBar;
