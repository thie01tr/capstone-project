import { ReactNode, useState, useEffect } from "react";
import Movie from "../model/Movie";
import { MoviesContext } from "./MoviesContext";
import Genre from "../model/Genre";
import { getTopRatedMovies } from "../services/movieApiService";

interface Props {
  children: ReactNode;
}

const MoviesContextProvider = ({ children }: Props) => {
  //Filter
  const [isFilterPanelVis, setIsFilterPaneVis] = useState(false);
  const [isAdultFiltered, setIsAdultFiltered] = useState(false);
  const [isRatingFiltered, setIsRatingFiltered] = useState(false);
  const [isGenreFiltered, setIsGenreFiltered] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  const [isAdult, setIsAdult] = useState(false);
  const [rating, setRating] = useState(0);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [watchList, setWatchList] = useState<Movie[]>([]);
  const toggleIsFilterPanelVis = (): void => {
    setIsFilterPaneVis((prev) => !prev);
  };
  const toggleIsAdultFiltered = (): void => {
    setIsAdultFiltered((prev) => !prev);
  };
  const toggleIsRatingFiltered = (): void => {
    setIsRatingFiltered((prev) => !prev);
  };
  const toggleIsGenreFiltered = (): void => {
    setIsGenreFiltered((prev) => !prev);
  };

  const toggleIsAdult = (): void => {
    setIsAdult((prev) => !prev);
  };

  const addToWatchLists = (movie: Movie) => {
    setWatchList((prev) => [...prev, movie]);
  };
  const removeWatchList = (id: number) => {
    setWatchList((prev) => prev.filter((watchList) => watchList.id !== id));
  };

  const isWatchList = (id: number): boolean => {
    return watchList.some((movie) => movie.id === id);
  };

  const storeGenres = (genres: Genre[]) => {
    setGenres(genres);
  };
  const setMoviesList = (movies: Movie[]) => {
    setTopMoviesList(movies);
  };
  const [topMoviesList, setTopMoviesList] = useState<Movie[]>([]);

  //onMount only need to do once
  useEffect(() => {
    getTopRatedMovies().then((res) => setTopMoviesList(res.results));
  }, []);

  useEffect(() => {
    setIsFilter(isAdultFiltered || isRatingFiltered || isGenreFiltered);
  }, [isAdultFiltered, isRatingFiltered, isGenreFiltered]);

  return (
    <MoviesContext.Provider
      value={{
        //filter
        isFilter,
        isFilterPanelVis,

        isAdultFiltered,
        isRatingFiltered,
        isGenreFiltered,

        isAdult,
        rating,
        genres,

        toggleIsFilterPanelVis,
        toggleIsAdult,
        toggleIsAdultFiltered,
        toggleIsRatingFiltered,
        toggleIsGenreFiltered,

        setRating,

        watchList,
        topMoviesList,
        setMoviesList,
        addToWatchLists,
        removeWatchList,
        isWatchList,
        storeGenres,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
