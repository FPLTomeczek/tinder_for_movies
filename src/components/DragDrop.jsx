import React from "react";
import Movie from "./Movie";
import { useMoviesContext } from "../context/MoviesContext";
import RefreshButton from "./RefreshButton";

const DragDrop = () => {
  const { movie, loaded, currentMovie, movies } = useMoviesContext();

  return (
    <>
      {loaded ? (
        currentMovie < movies.length ? (
          <Movie movie={movie} />
        ) : (
          <RefreshButton />
        )
      ) : null}
    </>
  );
};

export default DragDrop;
