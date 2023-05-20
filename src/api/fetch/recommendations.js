import { api } from "../../data/constants";

async function fetchRecommendations() {
  return await fetch(`${api}/recommendations`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

export { fetchRecommendations };
