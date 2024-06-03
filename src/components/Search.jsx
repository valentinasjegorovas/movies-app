import React, { useState } from 'react';

const Search = (props) => {
  const [search, setSearch] = useState('Avengers');
  const [type, setType] = useState('all');

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      if (props.searchMovies) {
        props.searchMovies(search, type);
      }
    }
  };

  const handleFilter = (event) => {
    const newType = event.target.dataset.type;
    setType(newType);
    if (props.searchMovies && type !== newType) {
      props.searchMovies(search, newType);
    }
  };

  return (
    <div className="row">
      <div className="input-field inline">
        <input
          placeholder="Search movie"
          id="searchInput"
          type="text"
          className="validate"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          onClick={() => {
            if (props.searchMovies) {
              props.searchMovies(search, type);
            }
          }}
          className="btn #5c6bc0 indigo lighten-1 button"
        >
          Search
        </button>
      </div>
      <div>
        <label>
          <input
            name="group1"
            type="radio"
            data-type="all"
            onChange={handleFilter}
            checked={type === 'all'}
          />
          <span>All</span>
        </label>
        <label>
          <input
            name="group1"
            type="radio"
            data-type="movie"
            onChange={handleFilter}
            checked={type === 'movie'}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            name="group1"
            type="radio"
            data-type="series"
            onChange={handleFilter}
            checked={type === 'series'}
          />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
};

export default Search;
