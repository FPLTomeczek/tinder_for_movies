import React from "react";
import Movie from "./Movie";
import DropBackground from "./DropBackground";
import Draggable from "react-draggable";
import { useDrop } from "react-dnd";

const DragDrop = () => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "movie",
    drop: () => console.log("dropped"),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <>
      <DropBackground drop={drop} />
      <Draggable>
        <div
          style={{
            width: "400px",
            margin: "0 auto",
          }}
        >
          <Movie />
        </div>
      </Draggable>
    </>
  );
};

export default DragDrop;
