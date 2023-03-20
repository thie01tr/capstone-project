import './MovieList.css'

interface Props {
  movies: [];
}

const MovieList = ({ movies }: Props) => {
  return (
    <div className="MovieList">
      <h2>Results</h2>
      <ul>
        {movies.map((item) => (
          <Result key={item.id + Math.random()} gif={item} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
