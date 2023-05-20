import React from "react";
import Movie from "./Movie";
import DropBackground from "./DropBackground";
import Draggable from "react-draggable";
import { useDrop } from "react-dnd";

const DragDrop = () => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: () => console.log("dropped"),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <>
      <div ref={drop}>
        <DropBackground />
      </div>
      <Draggable>
        <div>
          <Movie />
        </div>
      </Draggable>
    </>
  );
};

export default DragDrop;
