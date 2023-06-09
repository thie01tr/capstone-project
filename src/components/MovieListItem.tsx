import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Unstable_Grid2";
import Movie from "../model/Movie";
import "./MovieListItem.css";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Chip, Stack, Tooltip } from "@mui/material";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { pink } from "@mui/material/colors";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Link } from "react-router-dom";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
interface Props {
  movie: Movie;
}

const MovieListItem = ({ movie }: Props) => {
  const { addToWatchLists, removeWatchList, isWatchList, genres } =
    useContext(MoviesContext);

  console.log(genres);
  const genresList = movie.genre_ids.map((movieGId) => {
    console.log(genres.find((genre) => genre.id === movieGId));
    return genres.find((genre) => genre.id === movieGId)?.name;
  });
  console.log(genresList);

  const [openAddSnackBar, setOpenAddSnackBar] = React.useState(false);
  const [openRemoveSnackBar, setRemoveSnackBar] = React.useState(false);

  const handleAddWatchClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAddSnackBar(false);
  };

  const handleRemoveWatchClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setRemoveSnackBar(false);
  };
  return (
    <div className="MovieListItem">
      <Grid xs={8} md={8} lg={12}>
        <Card sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              width: "150px",
            }}
          >
            <CardContent>
              <Link
                to={`/movie/${movie.id}`}
                style={{ textDecoration: "unset", color: "unset" }}
              >
                <Typography component="div" variant="h6">
                  {movie.title}
                </Typography>
              </Link>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                  flexDirection: "row",
                }}
              >
                {genresList.map((generName) => {
                  return <Chip label={generName} size="small" />;
                })}

                {/* <Chip label="Action" size="small" /> */}
              </Box>

              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Score {movie.vote_average}
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              {!isWatchList(movie.id) ? (
                <Tooltip title="add to watchlist">
                  <IconButton
                    aria-label="add to watchlist"
                    onClick={() => {
                      addToWatchLists(movie);
                      setOpenAddSnackBar(true);
                      setRemoveSnackBar(false);
                    }}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="remove from watchlist">
                  <IconButton
                    aria-label="remove from watchlist"
                    onClick={() => {
                      removeWatchList(movie.id);
                      setRemoveSnackBar(true);
                      setOpenAddSnackBar(false);
                    }}
                  >
                    <FavoriteIcon sx={{ color: pink[500] }} />
                  </IconButton>
                </Tooltip>
              )}
              <Tooltip title="share">
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <Link to={`/movie/${movie.id}`}>
            <CardMedia
              component="img"
              sx={{ width: 200 }}
              image={`https://image.tmdb.org/t/p/original/` + movie.poster_path}
              alt="Live from space album cover"
            />
          </Link>
        </Card>
      </Grid>
      <Snackbar
        open={openAddSnackBar}
        autoHideDuration={4000}
        onClose={handleAddWatchClose}
      >
        <Alert
          onClose={handleAddWatchClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Added to Watchlist!
        </Alert>
      </Snackbar>

      <Snackbar
        open={openRemoveSnackBar}
        autoHideDuration={4000}
        onClose={handleRemoveWatchClose}
      >
        <Alert
          onClose={handleRemoveWatchClose}
          severity="warning"
          sx={{ width: "100%" }}
        >
          Removed from Watchlist!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default MovieListItem;
