import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  NEXT,
  PREVIOUS,
  RESET,
} from "../actions/actionTypes";
import { movies } from "../movies";

const initialState = {
  movies: movies,
  favoriteMovies: [],
  sira: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PREVIOUS:
      return {
        ...state,
        sira: state.sira - 1,
      };
    case NEXT:
      return {
        ...state,
        sira: state.sira + 1,
      };
    case RESET:
      return {
        ...state,
        sira: initialState.sira,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload.id),
        favoriteMovies: [...state.favoriteMovies, action.payload],
        sira:
          state.sira === state.movies.length - 1 ? state.sira - 1 : state.sira,
      };
    case REMOVE_FAVORITE:
      const { payload } = action;
      const favMovies = state.favoriteMovies.filter(
        (film) => film.id !== payload
      );
      const removedMovie = state.favoriteMovies.find(
        (film) => film.id === payload
      );
      console.log(state.movies);

      return {
        ...state,
        favoriteMovies: favMovies,
        movies: [...state.movies, removedMovie],
        sira: state.sira === -1 ? 0 : state.sira,
      };
    default:
      return state;
  }
};

export default reducer;
