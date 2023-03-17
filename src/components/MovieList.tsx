import './MovieList.css'

interface Props {
  movies: [];
}

const MovieList = ({ gifs }: Props) => {
  return (
    <div className="MovieList">
      <h2>Results</h2>
      <ul>
        {gifs.map((item) => (
          <Result key={item.id + Math.random()} gif={item} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
