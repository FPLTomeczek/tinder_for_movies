import { SET_MOVIES, START_FETCHING, NEXT_MOVIE } from "./actions";

const MoviesReducer = (state, action) => {
  if (action.type === SET_MOVIES) {
    return { ...state, movies: action.payload, loaded: true };
  }
  if (action.type === START_FETCHING) {
    return { ...state, loaded: false };
  }
  if (action.type === NEXT_MOVIE) {
    if (state.currentMovie + 1 > state.movies.length) {
      return { ...state, currentMovie: 0 };
    }
    return { ...state, currentMovie: state.currentMovie + 1 };
  }
  return state;
};

export default MoviesReducer;
