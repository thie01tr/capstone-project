import { createContext } from "react";
import Movie from "../model/Movie";

interface MoviesContextModel {
  isFilter: boolean;
  isFilterPanelVis: boolean;

  //search Terms
  isAdult: boolean;
  rating: number;
  originalLan: string;

  // watchlist
  watchList: Movie[];
  addToWatchLists: (movie: Movie) => void;
  removeWatchList: (id: number) => void;
  isWatchList: (id: number) => boolean;
  toggleIsFilterPanelVis: () => void;
}

const defaultValues: MoviesContextModel = {
  watchList: [],
  isFilter: false,
  isFilterPanelVis: false,

  //search Terms
  isAdult: false,
  rating: 10,
  originalLan: "ENG",

  addToWatchLists: (movie: Movie) => {},
  removeWatchList: (id: number) => {},
  isWatchList: (id: number) => false,
  toggleIsFilterPanelVis: () => {}
};

export const MoviesContext = createContext<MoviesContextModel>(defaultValues);
