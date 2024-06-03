import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=bd25baa4&s=matrix')
      .then((data) => setMovies(data.Search))
      .catch((error) => console.log(error));
  });
  return (
    <main className="container content">
      <Search />
      {movies.length ? <Movies movies={movies} /> : <Preloader />}
    </main>
  );
};

export default Main;
