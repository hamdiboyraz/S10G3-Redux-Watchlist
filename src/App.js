import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  previousMovie,
  nextMovie,
  returnToFirstMovie,
} from "./actions/moviesActions";

function App() {
  // useSelector
  const movies = useSelector((store) => store.movies);
  const favMovies = useSelector((store) => store.favoriteMovies);
  const sira = useSelector((store) => store.sira);

  // useDispatch
  const dispatch = useDispatch();

  // handle Functions
  const handlePreviousMovie = () => {
    dispatch(previousMovie());
  };

  const handleNextMovie = () => {
    dispatch(nextMovie());
  };

  const handleReturnToFirstMovie = () => {
    dispatch(returnToFirstMovie());
  };

  const handleAddFavorite = (movie) => {
    dispatch(addFavorite(movie));
  };

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          {movies.length > 0 && (
            <>
              <Movie sira={sira} />

              <div className="flex gap-3 justify-center py-3">
                <button
                  disabled={sira === 0 ? true : false}
                  onClick={handlePreviousMovie}
                  className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500 disabled:cursor-not-allowed"
                >
                  Geri
                </button>
                <button
                  onClick={() => handleAddFavorite(movies[sira])}
                  className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
                >
                  Listeme ekle
                </button>
                <button
                  disabled={sira === movies.length - 1 ? true : false}
                  onClick={handleNextMovie}
                  className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500 disabled:cursor-not-allowed"
                >
                  İleri
                </button>
              </div>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={handleReturnToFirstMovie}
                  className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
                >
                  Başa Dön
                </button>
              </div>
            </>
          )}
          {movies.length === 0 && <div>No movie found.</div>}
        </Route>
        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
