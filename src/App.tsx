import "./App.css";
import MovieList from "./components/MovieList";
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import ToolBar from "./components/ToolBar";
import Favorites from "./components/Favorites";
import MovieDetail from "./components/MovieDetail";
import Grid from "@mui/material/Unstable_Grid2";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import GenreList from "./components/GenreList";
import FilterPanel from "./components/FilterPanel";
import { useContext,useEffect, useState } from "react";
import { MoviesContext } from "./context/MoviesContext";


function App() {
  const {isFilterPanelVis} = useContext(MoviesContext);
  const [movielistSize,setMovielistSize] = useState(12);

  useEffect(()=>{
    setMovielistSize(isFilterPanelVis?8:12)
  },[isFilterPanelVis])

  return (
    <div className="App">
      <Router>
        <Header/>
        <Grid container spacing={2} xs={12}>
          <Grid container spacing={2} xs={movielistSize}>
            <Routes>
              <Route path="/" element={<MovieList />} />
              <Route path="/favorite" element={<Favorites />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Grid>
          {isFilterPanelVis ? (
          <Grid container spacing={2} xs={4}>
            <FilterPanel/>
          </Grid>)
          :
          (<></>)}


        </Grid>
        
      </Router>
      
    </div>
  );
}

export default App;

/**
 * Context
 *  App
 *    Header
 *      ICON*
 *      Title
 *      NAVBar
 *        Filter
 *          1
 *          2
 *          3
 *    Routes
 *      Route 'Home'
 *        MovieList
 *          MovieItems
 *            Button to add/remove from favorites
 *      Route 'Favorite'
 *        List
 *          MovieItems (only shows favorite)
 *            Button to remove from favorites
 *      Route 'Detail'
 *        MovieItem with some text
 *      Route '*'
 *        404 w/option to go home
 *    Footer*
 *
 */
