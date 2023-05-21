import { createContext, useReducer } from "react";
import { useContext } from "react";
import { fetchMovies as fetchAllMovies } from "../api/fetch/movies";
import { SET_MOVIES, START_FETCHING } from "../reducers/actions";
import reducer from "../reducers/MoviesReducer";

const MoviesContext = createContext();

const initialState = {
  movies: [],
  loaded: false,
};

export const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchMovies = async () => {
    try {
      dispatch({ type: START_FETCHING, payload: false });
      const movies = await fetchAllMovies();
      dispatch({ type: SET_MOVIES, payload: movies });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        ...state,
        fetchMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => {
  return useContext(MoviesContext);
};
