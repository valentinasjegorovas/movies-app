import React, { useEffect, useState, useCallback } from 'react';
import Search from '../components/Search';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = useCallback((str, type = 'all') => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=bd25baa4&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setMovies(data.Search || []);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    searchMovies('avengers');
  }, [searchMovies]);

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
};

export default Main;
