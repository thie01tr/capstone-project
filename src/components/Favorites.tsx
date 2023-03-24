import "./Favorites.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import MovieListItem from "./MovieListItem";

const Favorites = () => {
  const { removeWatchList, watchList } = useContext(MoviesContext);
  return (
    <Container>
      <h2>Favorites</h2>
      <Box sx={{ bgcolor: "#e8eaebc2", marginTop: "30px" }}>
        <Grid container spacing={2} sx={{ justifyContent: "space-evenly" }}>
          {watchList.map((item) => (
            <MovieListItem key={item.id + Math.random()} movie={item} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Favorites;
