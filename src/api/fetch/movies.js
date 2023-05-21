import { api } from "../../data/constants";

async function fetchMovies() {
  const movies = await fetch(`${api}/recommendations`)
    .then((response) => response.json())
    .then((data) => data);
  return movies;
}

async function putRequest(type, id) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mess: "PUT request" }),
  };

  await fetch(`${api}/recommendations/${id}/${type}`, requestOptions)
    .then(async (response) => {
      const data = await response.json();
    })
    .catch((error) => {
      console.error(error);
    });
}

export { fetchMovies, putRequest };
