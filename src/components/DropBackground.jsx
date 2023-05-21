import React from "react";

const DropBackground = ({ drop }) => {
  return (
    <div
      ref={drop}
      style={{
        width: "100vw",
        height: "100vh",
        border: "1px solid black",
        boxSizing: "border-box",
        position: "absolute",
      }}
    ></div>
  );
};

export default DropBackground;
