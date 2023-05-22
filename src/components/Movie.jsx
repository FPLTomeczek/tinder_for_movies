import { useMoviesContext } from "../context/MoviesContext";
import { Box, Paper, Typography, Container } from "@mui/material";

import Buttons from "./Buttons";

import { useEffect, useRef, useState } from "react";
import { putRequest } from "../api/fetch/movies";

const Movie = ({ movie }) => {
  const { imageURL, title, summary, rating, id } = movie;

  console.log(movie.id);

  useEffect(() => {
    let mousePosition;
    let offset = [0];
    let isDown = false;
    const handleMouseDown = (e) => {
      isDown = true;
      offset = [paper.offsetLeft - e.clientX];
    };

    const handleMouseUp = (e) => {
      isDown = false;
    };

    const handleMouseMove = (event) => {
      if (paper.offsetLeft !== 0) {
        paper.style.left = 0;
      }
      if (isDown) {
        mousePosition = {
          x: event.clientX,
        };
        paper.style.left = mousePosition.x + offset[0] + "px";
      }
    };
    const paper = document.getElementById("paper");

    paper.addEventListener("mousedown", handleMouseDown);

    paper.addEventListener("mouseup", handleMouseUp);

    paper.addEventListener("mousemove", handleMouseMove);

    return () => {
      paper.removeEventListener("mousedown", handleMouseDown);
      paper.removeEventListener("mouseup", handleMouseUp);
      paper.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Box>
      <Container maxWidth="sm">
        <Box sx={{ position: "relative" }}>
          <Paper
            id="paper"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
            elevation={3}
          >
            <Typography variant="h6" component="h2" p={1} align="center">
              {title}
            </Typography>
            <Typography variant="h6" component="h2" p={1} align="center">
              {rating}
            </Typography>
            <img
              src={imageURL}
              alt="moviePoster"
              style={{ maxWidth: "300px" }}
              draggable="false"
            />
            <Buttons id={id} />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Movie;
