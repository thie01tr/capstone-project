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
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
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
