import { ReactNode, useState } from "react";
import Movie from "../model/Movie";
import { MoviesContext } from "./MoviesContext";
import Genre from "../model/Genre";

interface Props {
  children: ReactNode;
}

const MoviesContextProvider = ({ children }: Props) => {
  const [watchList, setWatchList] = useState<Movie[]>([]);
  const [isFilter, setIsFilter] = useState(false);
  const [isFilterPanelVis, setIsFilterPaneVis] = useState(false);

  const [isAdult, setIsAdult] = useState(false);
  const [rating, setRating] = useState(10);
  const [originalLan, setOriginalLan] = useState("ENG");
  const [genres, setGenres] = useState<Genre[]>([]);

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

  const toggleIsFilterPanelVis = ():void => {
    setIsFilterPaneVis((prev) => !prev);
  };


  return (
    <MoviesContext.Provider
      value={{
        watchList,
        isFilter,
        isFilterPanelVis,
        isAdult,
        rating,
        originalLan,
        genres,
        addToWatchLists,
        removeWatchList,
        isWatchList,
        storeGenres,
        toggleIsFilterPanelVis,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
