import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import FilterListIcon from "@mui/icons-material/FilterList";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../context/MoviesContext";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
} from "@mui/material";
import FilterPanel from "./FilterPanel";
import GenreList from "./GenreList";
import Genre from "../model/Genre";
import { getFilteredMovie, getGenreLists } from "../services/movieApiService";

const Header = () => {
  const {
    //isAdult
    isAdult,
    toggleIsAdult,
    isAdultFiltered,
    toggleIsAdultFiltered,

    //Rating
    toggleIsFilterPanelVis,
    rating,
    setRating,
    isRatingFiltered,
    toggleIsRatingFiltered,
    setMoviesList,
    //Genre
  } = useContext(MoviesContext);
  console.log(isAdult);
  const [open, setOpen] = useState(false);
  const [genre, setGenre] = useState<Genre[]>([]);
  const { storeGenres } = useContext(MoviesContext);
  //useState<Movie[]>([]);
  useEffect(() => {
    getGenreLists().then((res) => {
      setGenre(res.genres);
      storeGenres(res.genres);
    });
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFilter = () => {
    // setOpen(false);
    let genreId = selectedGenre ? +selectedGenre : undefined;
    console.log(selectedGenre);
    console.log(genreId);
    getFilteredMovie(genreId, undefined, isAdult).then((res) => {
      setMoviesList(res.results);
    });
  };
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleGenreChange = (event: SelectChangeEvent) => {
    setSelectedGenre(event.target.value);
  };
  return (
    <header className="Header">
      {/* Icon     |     Title    |    Buttons */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: "background.paper",
          color: "text.secondary",
          "& svg": {
            m: 1.5,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <Link to={"/"}>
          <HomeIcon />
        </Link>
        <Divider orientation="vertical" variant="middle" flexItem />
        <h1 className="Title">Movie APP</h1>
        <Divider orientation="vertical" variant="middle" flexItem />

        <p className="Header__attribution">
          Powered By <a href="https://api.themoviedb.org/">TheMovieDB</a>
        </p>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Link to={"/favorite"}>
          <FavoriteIcon />
        </Link>
        <Divider orientation="vertical" variant="middle" flexItem />
        <FilterListIcon
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        />
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle>Filter</DialogTitle>
        <DialogContent>
          <FormControlLabel
            sx={{ mt: 1 }}
            control={<Switch checked={isAdult} onChange={toggleIsAdult} />}
            label="Show Adult Rated"
          />
        </DialogContent>
        <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
          {/* <InputLabel shrink htmlFor="select-multiple-native">
            Genre
          </InputLabel> */}
          <InputLabel shrink htmlFor="select-multiple-native">
            Select Genre
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={selectedGenre}
              onChange={handleGenreChange}
              label="Select Genre"
            >
              <MenuItem value="">
                <em>Select Genre</em>
              </MenuItem>
              {genre.map((genre) => {
                return (
                  <MenuItem key={genre.id} value={genre.id}>
                    {" "}
                    {genre.name}
                  </MenuItem>
                );
              })}
            </Select>
          </InputLabel>
        </FormControl>
        <DialogActions>
          <Button onClick={handleFilter}>Filter</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </header>
  );
};

export default Header;
