import "./MovieList.css";
import Movie from "../model/Movie";
import MovieListItem from "./MovieListItem";
import { useEffect, useState } from "react";
import { getTopRatedMovies } from "../services/movieApiService";
import Grid from "@mui/material/Unstable_Grid2";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import GenreList from "./GenreList";

import Container from "@mui/material/Container";
const MovieList = () => {
  const [movie, setMovie] = useState<Movie[]>([]);

  useEffect(() => {
    getTopRatedMovies().then((res) => setMovie(res.results));
  }, []);

  const [filter, setFilterCriteria] = useState("rating");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setFilterCriteria(newAlignment);
  };

  return (
    <div className="MovieList">
      <h2>Top Rated Movies</h2>
      <Container>
        <Box sx={{ bgcolor: "#e8eaebc2" }}>
          <Grid container spacing={2} sx={{ justifyContent: "space-evenly" }}>
          {movie.map((item) => (
            <MovieListItem key={item.id + Math.random()} movie={item} />
          ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default MovieList;
