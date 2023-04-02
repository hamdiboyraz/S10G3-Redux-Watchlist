import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  PREVIOUS,
  NEXT,
  RESET,
} from "./actionTypes";

export const previousMovie = () => {
  return { type: PREVIOUS };
};

export const nextMovie = () => {
  return { type: NEXT };
};

export const returnToFirstMovie = () => {
  return { type: RESET };
};

export const addFavorite = (movie) => {
  console.log(movie);

  return { type: ADD_FAVORITE, payload: movie };
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};
