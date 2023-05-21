import { SET_MOVIES, START_FETCHING } from "./actions";

const MoviesReducer = (state, action) => {
  if (action.type === SET_MOVIES) {
    return { ...state, movies: action.payload, loaded: true };
  }
  if (action.type === START_FETCHING) {
    return { ...state, loaded: false };
  }
  return state;
};

export default MoviesReducer;
