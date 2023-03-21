import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
 
function App() {
  return (
    <div className="App">
      <Header/>
      <MovieList />
      
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