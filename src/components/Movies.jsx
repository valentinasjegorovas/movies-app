import Movie from './Movie';

const Movies = ({ movies = [] }) => {
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => {
          return <Movie key={movie.imdbID} {...movie} />;
        })
      ) : (
        <h4>Nothing found, please try again.</h4>
      )}
    </div>
  );
};

export default Movies;
