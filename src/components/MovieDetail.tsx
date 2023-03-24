import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link, useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import Movie from "../model/Movie";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Alert, Chip, Container, Stack, Tooltip } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { pink } from "@mui/material/colors";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { getMovieById } from "../services/movieApiService";
const MovieDetail = () => {
  const movieId: string | undefined = useParams()?.id;
  const { addToWatchLists, removeWatchList, isWatchList } =
    useContext(MoviesContext);

  const [openAddSnackBar, setOpenAddSnackBar] = React.useState(false);
  const [openRemoveSnackBar, setRemoveSnackBar] = React.useState(false);
  const [movie, setMovie] = useState<Movie | null>(null);

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAddSnackBar(false);
    setRemoveSnackBar(false);
  };
  const navigate = useNavigate();

  useEffect(() => {
    getMovieById(movieId!)
      .then((movie) => {
        setMovie(movie);
      })
      .catch(() => {
        navigate("/");
      });
  }, [movieId]);
  return (
    <div className="MovieDetail">
      {movie && (
        <Container
          sx={{ minHeight: "100vh", paddingTop: "25px", maxWidth: "100%" }}
        >
          <Box sx={{ bgcolor: "#e8eaebc2" }}>
            <Grid xs={8} md={8} lg={12}>
              <Card sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <CardMedia
                  component="img"
                  sx={{ width: "auto", height: "80vh" }}
                  image={
                    `https://image.tmdb.org/t/p/original/` + movie.poster_path
                  }
                  alt="Live from space album cover"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent>
                    <Typography component="div" variant="h6">
                      {movie.title}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      {movie.genres?.map((genre) => (
                        <Chip label={genre.name} size="small" key={genre.id} />
                      ))}
                    </Stack>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Score {movie.vote_average}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Release Date {movie.release_date}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Runtime {movie.runtime}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      pl: 1,
                      pb: 1,
                    }}
                  >
                    <div>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        {movie.overview}
                      </Typography>
                    </div>
                    <div>
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
                    </div>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Snackbar
              open={openAddSnackBar}
              autoHideDuration={4000}
              onClose={handleSnackbarClose}
            >
              <Alert
                onClose={handleSnackbarClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Added to Watchlist!
              </Alert>
            </Snackbar>

            <Snackbar
              open={openRemoveSnackBar}
              autoHideDuration={4000}
              onClose={handleSnackbarClose}
            >
              <Alert
                onClose={handleSnackbarClose}
                severity="warning"
                sx={{ width: "100%" }}
              >
                Removed from Watchlist!
              </Alert>
            </Snackbar>
          </Box>
        </Container>
      )}
    </div>
  );
};

export default MovieDetail;
