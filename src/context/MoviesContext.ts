import { createContext } from "react";
import Movie from "../model/Movie";
import Genre from "../model/Genre";

interface MoviesContextModel {
  isFilter: boolean;
  isFilterPanelVis: boolean;

  //search Terms
  isAdult: boolean;
  rating: number;
  originalLan: string;
  genres: Genre[];

  // watchlist
  watchList: Movie[];
  addToWatchLists: (movie: Movie) => void;
  removeWatchList: (id: number) => void;
  isWatchList: (id: number) => boolean;
  storeGenres: (genres: Genre[]) => void;
}

const defaultValues: MoviesContextModel = {
  watchList: [],
  isFilter: false,
  isFilterPanelVis: false,
  genres: [],

  //search Terms
  isAdult: false,
  rating: 10,
  originalLan: "ENG",

  addToWatchLists: (movie: Movie) => {},
  removeWatchList: (id: number) => {},
  isWatchList: (id: number) => false,
  storeGenres: () => {},
};

export const MoviesContext = createContext<MoviesContextModel>(defaultValues);
