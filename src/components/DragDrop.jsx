import React from "react";
import Movie from "./Movie";
import DropBackground from "./DropBackground";
import Draggable from "react-draggable";

const DragDrop = () => {
  return (
    <>
      <DropBackground />
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
