import React from "react";
import { ButtonGroup, IconButton } from "@mui/material";

import DoneIcon from "@mui/icons-material/Done";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useMoviesContext } from "../context/MoviesContext";

import { putRequest } from "../api/fetch/movies";

const Buttons = ({ id }) => {
  const { setNextMovie } = useMoviesContext();

  return (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined button group"
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        padding: "1rem",
      }}
    >
      <IconButton
        color="success"
        size="large"
        onClick={(e) => {
          setNextMovie();
          putRequest("accept", id);
          e.stopPropagation();
        }}
      >
        <DoneIcon sx={{ fontSize: "36px" }} />
      </IconButton>
      <IconButton
        color="error"
        size="large"
        onClick={(e) => {
          setNextMovie();
          putRequest("reject", id);
          e.stopPropagation();
        }}
      >
        <HighlightOffIcon sx={{ fontSize: "36px" }} />
      </IconButton>
    </ButtonGroup>
  );
};

export default Buttons;
