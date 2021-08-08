import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://react-http-9390f-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    fetch("https://swapi.dev/api/films/")
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results.map((movie) => {
          return {
            id: movie.episode_id,
            title: movie.title,
            openingText: movie.opening_crawl,
            releaseDate: movie.release_date,
          };
        });
        setMovies(movies);
      })
      .catch((error) => {
        setError(true);
        console.log("error", error);
      });
    setIsLoading(false);
  }, []);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (!isLoading && movies.length === 0) {
    content = <p>No movies found</p>;
  }
  if (!isLoading && error) {
    content = <p>Something went wrong.</p>;
  }
  if (!isLoading) {
    content = <MoviesList movies={movies} />;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
