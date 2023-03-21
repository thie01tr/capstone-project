import { Link } from 'react-router-dom';
import Movie from '../model/Movie';
import './MovieListItem.css'

interface Props {
    movie: Movie;
  }
  

const MovieListItem = ({ movie }: Props) => {
  return (
    <div className='MovieListItem'>
      <li className="Result">
            {/* <Link to={`/gif/${movie.id}`}> */}
              <h3>{movie.title}</h3>
              {/* <img src={`https://image.tmdb.org/t/p/original/`+movie.poster_path} alt="the GIF" /> */}
            {/* </Link> */}
            {/* <p className=".link">
              <a href={movie.} target="_blank" rel="noreferrer">
                Link to Giphy
              </a>
            </p> */}
          </li>


    </div>






  )
};

export default MovieListItem;
