import { createContext } from "react";
import Movie from "../model/Movie";

interface MoviesContextModel {
    watchList: Movie[];
    isFilter:boolean;
    isFilterPanelVis:boolean;


    //search Terms
    isAdult:boolean;
    rating:number;
    originalLan:string;
}

const defaultValues: MoviesContextModel = {
    watchList: [],
    isFilter:false,
    isFilterPanelVis:false,


    //search Terms
    isAdult:false,
    rating:10,
    originalLan:'ENG'
}

export const MoviesContext = 
    createContext<MoviesContextModel>(defaultValues);