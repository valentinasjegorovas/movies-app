import React, { useState, useEffect, useCallback } from 'react';

const Search = () => {
  return (
    <div className="row">
      <div className="input-field inline">
        <input
          placeholder="Search movie"
          id="email_inline"
          type="text"
          className="validate"
        />
        <button className="btn #5c6bc0 indigo lighten-1 button">Search</button>
      </div>
      <div>
        <label>
          <input name="group1" type="radio" data-type="all" />
          <span>All</span>
        </label>
        <label>
          <input name="group1" type="radio" data-type="movie" />
          <span>Movies only</span>
        </label>
        <label>
          <input name="group1" type="radio" data-type="series" />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
};

export default Search;
