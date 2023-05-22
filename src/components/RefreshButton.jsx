import React from "react";
import { Box, Button } from "@mui/material";
import { useMoviesContext } from "../context/MoviesContext";

const RefreshButton = () => {
  const { setNextMovie } = useMoviesContext();

  return (
    <Box>
      <Button variant="contained" onClick={() => setNextMovie()}>
        refresh
      </Button>
    </Box>
  );
};

export default RefreshButton;
