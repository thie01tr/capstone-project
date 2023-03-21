import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import Movie from "../model/Movie";
import "./MovieListItem.css";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
interface Props {
  movie: Movie;
}

const MovieListItem = ({ movie }: Props) => {
  const theme = useTheme();
  return (
    <div className="MovieListItem">
      {/* <Link to={`/gif/${movie.id}`}>
          <h3>{movie.title}</h3>
          <img
            src={`https://image.tmdb.org/t/p/original/` + movie.poster_path}
            alt="the GIF"
          />
        </Link> */}
      {/* <p className=".link">
              <a href={movie.} target="_blank" rel="noreferrer">
                Link to Giphy
              </a>
            </p> */}
      <Grid xs={8} md={8} lg={12}>
        <Card sx={{ display: "flex" }}>
          <Box
            sx={{ display: "flex", flexDirection: "column", width: "150px" }}
          >
            <CardContent>
              <Typography component="div" variant="h6">
                {movie.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Score {movie.vote_average}
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image={`https://image.tmdb.org/t/p/original/` + movie.poster_path}
            alt="Live from space album cover"
          />
        </Card>
      </Grid>
    </div>
  );
};

export default MovieListItem;
