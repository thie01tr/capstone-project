import { ReactNode, useState } from "react";
import Movie from "../model/Movie";
import { MoviesContext } from "./MoviesContext";

interface Props {
    children:ReactNode;
}

const MoviesContextProvider = ({children}:Props) => {
    const[watchList,setWatchList] = useState<Movie[]>([]);
    const[isFilter,setIsFilter] = useState(false);
    const[isFilterPanelVis,setIsFilterPaneVis] = useState(false);

    const[isAdult,setIsAdult] = useState(false);
    const[rating,setRating] = useState(10);
    const[originalLan,setOriginalLan] = useState('ENG');
    


  return (
    <MoviesContext.Provider
      value={{
        watchList,
        isFilter,
        isFilterPanelVis,
        isAdult,
        rating,
        originalLan
      }}
    >
      {children}
    </MoviesContext.Provider>
  )
};

export default MoviesContextProvider;
