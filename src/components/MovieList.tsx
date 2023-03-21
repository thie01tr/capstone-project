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
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Search" variant="outlined" />
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Filter</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="Rating"
              control={<Radio />}
              label="Rating"
            />
            <FormControlLabel value="Age" control={<Radio />} label="Age" />
            <FormControlLabel
              value="Language"
              control={<Radio />}
              label="Language"
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <Grid container spacing={2}>
        {movie.map((item) => (
          <MovieListItem key={item.id + Math.random()} movie={item} />
        ))}
      </Grid>
    </div>
  );
};

export default MovieList;
