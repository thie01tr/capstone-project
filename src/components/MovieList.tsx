import "./MovieList.css";
import Movie from "../model/Movie";
import MovieListItem from "./MovieListItem";
import { useEffect, useState, useContext } from "react";
import {
  getFilteredMovie,
  getGenreLists,
  getTopRatedMovies,
} from "../services/movieApiService";
import Grid from "@mui/material/Unstable_Grid2";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import GenreList from "./GenreList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Container from "@mui/material/Container";
import { MoviesContext } from "../context/MoviesContext";
import { Pagination, PaginationItem, Stack } from "@mui/material";
const MovieList = () => {
  const { storeGenres } = useContext(MoviesContext);
  const [ml, setMl] = useState<Movie[]>([]);
  const {
    isFilter,
    isAdultFiltered,
    isRatingFiltered,
    isGenreFiltered,
    isAdult,
    rating,
    topMoviesList,
    setMoviesList,
  } = useContext(MoviesContext);

  useEffect(() => {
    setMl([...topMoviesList]);
  }, [topMoviesList]);
  useEffect(() => {
    getGenreLists().then((res) => {
      storeGenres(res.genres);
    });
  }, []);
  useEffect(() => {
    if (isFilter) {
      console.log("isAdult= " + isAdult);
      console.log(topMoviesList.find((m) => m.adult === isAdult));
      if (isAdultFiltered)
        setMl(() => [...topMoviesList.filter((m) => m.adult === isAdult)]);
      if (isRatingFiltered)
        setMl((prev) => [...prev.filter((m) => m.vote_average >= rating)]);
      //isGenre
    } else {
      setMl([...topMoviesList]);
    }
  }, [isAdultFiltered, isRatingFiltered, isAdult, rating]);

  const [filter, setFilterCriteria] = useState("rating");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setFilterCriteria(newAlignment);
  };
  const [page, setPage] = useState(1);
  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    getFilteredMovie(undefined, undefined, isAdult, page).then((res) => {
      setMoviesList(res.results);
    });
  };
  return (
    <div className="MovieList">
      <h2>Top Rated Movies: {ml.length}</h2>
      <Container>
        <Box sx={{ bgcolor: "#e8eaebc2", maxWidth: "100%" }}>
          <Grid container spacing={2} sx={{ justifyContent: "space-evenly" }}>
            {ml.map((item) => (
              <MovieListItem key={item.id + Math.random()} movie={item} />
            ))}
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <Stack spacing={2}>
              <Pagination
                count={10}
                page={page}
                onChange={handlePaginationChange}
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                  />
                )}
              />
            </Stack>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default MovieList;
