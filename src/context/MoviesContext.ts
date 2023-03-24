import { createContext } from "react";
import Movie from "../model/Movie";
import Genre from "../model/Genre";

interface MoviesContextModel {
  //Filter
  isFilter: boolean;
  isFilterPanelVis: boolean;
  isAdultFiltered: boolean;
  isRatingFiltered: boolean;
  isGenreFiltered: boolean;

  isAdult: boolean;
  rating: number;
  genres: Genre[];

  toggleIsFilterPanelVis: () => void;
  toggleIsAdultFiltered: () => void;
  toggleIsRatingFiltered: () => void;
  toggleIsGenreFiltered: () => void;

  toggleIsAdult: () => void;
  setRating: (value: number) => void;

  // watchlist
  topMoviesList: Movie[];
  setMoviesList: (movie: Movie[]) => void;

  watchList: Movie[];
  addToWatchLists: (movie: Movie) => void;
  removeWatchList: (id: number) => void;
  isWatchList: (id: number) => boolean;
  storeGenres: (genres: Genre[]) => void;
  total_pages: number;
  setTotalPage: (id: number) => void;
}

const defaultValues: MoviesContextModel = {
  //filter
  isFilter: false,
  isFilterPanelVis: false,
  isAdultFiltered: false,
  isRatingFiltered: false,
  isGenreFiltered: false,

  isAdult: false,
  rating: 0,
  genres: [],
  total_pages: 10,
  setTotalPage: () => {},

  toggleIsFilterPanelVis: () => {},
  toggleIsAdultFiltered: () => {},
  toggleIsRatingFiltered: () => {},
  toggleIsGenreFiltered: () => {},

  toggleIsAdult: () => {},
  setRating: (value: number) => {},

  topMoviesList: [],
  //filteredMoviesList: [],
  watchList: [],
  addToWatchLists: (movie: Movie) => {},
  removeWatchList: (id: number) => {},
  isWatchList: (id: number) => false,
  storeGenres: () => {},
  setMoviesList: () => {},
};

export const MoviesContext = createContext<MoviesContextModel>(defaultValues);
