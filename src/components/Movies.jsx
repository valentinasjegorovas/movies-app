import Movie from './Movie';

const Movies = ({movies}) => {
  return (
    <div className="movies">
      {movies.map((movie) => {
        return <Movie key={movie.imdbID} {...movie} />;
      })}
    </div>
  );
};

export default Movies;
