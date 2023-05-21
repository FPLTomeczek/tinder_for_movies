import { api } from "../../data/constants";

async function fetchMovies() {
  const movies = await fetch(`${api}/recommendations`)
    .then((response) => response.json())
    .then((data) => data);
  return movies;
}

export { fetchMovies };
