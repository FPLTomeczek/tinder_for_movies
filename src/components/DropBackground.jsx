import React from "react";
import { useDrop } from "react-dnd";
import { useMoviesContext } from "../context/MoviesContext";

const DropBackground = () => {
  const { setNextMovie } = useMoviesContext();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "movie",
    drop: () => setNextMovie(),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
        position: "absolute",
        background: isOver ? "red" : null,
      }}
    ></div>
  );
};

export default DropBackground;
