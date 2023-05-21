import { useDrag } from "react-dnd";
import { useMoviesContext } from "../context/MoviesContext";
import {
  Box,
  Paper,
  Typography,
  ButtonGroup,
  Button,
  Container,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { putRequest } from "../api/fetch/movies";

import DoneIcon from "@mui/icons-material/Done";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useEffect, useRef, useState } from "react";

const Movie = () => {
  const { movies, loaded, currentMovie, setNextMovie } = useMoviesContext();
  const [position, setPosition] = useState({});
  const boxRef = useRef(null);
  // let rect;

  // const getPosition = () => {
  //   const { top, left } = document
  //     .getElementById("paper")
  //     .getBoundingClientRect();
  //   setPosition({ top, left });
  // };

  useEffect(() => {
    if (boxRef.current) {
      const { top, left } = boxRef.current.getBoundingClientRect();
      console.log("Div position:", { top, left });
    }
  }, []);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "movie",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  if (!loaded) {
    return <CircularProgress />;
  }

  if (currentMovie > movies.length - 1) {
    return (
      <Box>
        <Button variant="contained" onClick={() => setNextMovie()}>
          refresh
        </Button>
      </Box>
    );
  }

  const { imageURL, title, summary, rating, id } = movies[currentMovie];

  return (
    <Box>
      <Container maxWidth="sm">
        <Box ref={boxRef}>
          <Paper
            id="paper"
            ref={drag}
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
            />
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
                onClick={() => {
                  setNextMovie();
                  putRequest("accept", id);
                }}
              >
                <DoneIcon sx={{ fontSize: "36px" }} />
              </IconButton>
              <IconButton
                color="error"
                size="large"
                onClick={() => {
                  setNextMovie();
                  putRequest("reject", id);
                }}
              >
                <HighlightOffIcon sx={{ fontSize: "36px" }} />
              </IconButton>
            </ButtonGroup>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Movie;
