import "./App.css";
import DragDrop from "./components/DragDrop";
import { useEffect } from "react";
import { useMoviesContext } from "./context/MoviesContext";

function App() {
  const { fetchMovies } = useMoviesContext();

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <DragDrop />
    </div>
  );
}

export default App;
