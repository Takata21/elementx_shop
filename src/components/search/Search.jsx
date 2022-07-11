import React from 'react';
import './Search.css';
const Search = () => {
  return (
    <div class="nav-searchbar-wrapper">
      <form class="nav-searchbar search-big">
        <div class="nav-fill">
          <div class="nav-search-field">
            <input type="text" class="nav-input nav-progressive-attribute" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
