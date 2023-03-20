import './MovieList.css'
import Movie from '../model/Movie';
import MovieListItem from './MovieListItem';
import { useEffect, useState } from "react";
import { getTopRatedMovies } from '../services/movieApiService';


const MovieList = () => {

  const [movie, setMovie] = useState<Movie[]>([]);

  useEffect(() => {
    getTopRatedMovies().then((res) => setMovie(res.results));
  }, []);

  return (
    <div className="MovieList">
      <h2>Results</h2>
      <ul>
        {movie.map((item) => (
          <MovieListItem key={item.id + Math.random()} movie={item} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
