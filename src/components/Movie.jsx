import { useState } from "react";
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

import DoneIcon from "@mui/icons-material/Done";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const recommendations = [
  {
    id: "1and3011",
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    title: "Inferno",
    summary: "Lorem ipsum….",
    rating: 5.3,
  },
  {
    id: "2301abc",
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "Lorem ipsum….",
    rating: 8.2,
  },
];

const Movie = () => {
  const [currentMovie, setCurrentMovie] = useState(0);
  const { movies, loaded } = useMoviesContext();

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
        <Button variant="contained" onClick={() => setCurrentMovie(0)}>
          refresh
        </Button>
      </Box>
    );
  }

  const { imageURL, title, summary, rating, id } = movies[currentMovie];

  return (
    <Box>
      <Container maxWidth="sm">
        <Box>
          <Paper
            ref={drag}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
                onClick={() => setCurrentMovie((prev) => prev + 1)}
              >
                <DoneIcon sx={{ fontSize: "36px" }} />
              </IconButton>
              <IconButton
                color="error"
                size="large"
                onClick={() => setCurrentMovie((prev) => prev + 1)}
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
