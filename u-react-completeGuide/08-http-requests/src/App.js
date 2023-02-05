import React, { useState, useEffect, useCallback } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [errors, setErrors] = useState(false);
  const [isLoading, setIsLoading] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setErrors(null);
    setIsLoading(true);
    // === Method 1: Promises
    // fetch('https://swapi.dev/api/films')
    //   .then(response => { return response.json() })
    //   .then(data => {
    //     const moviesData = data.results.map(movie => {
    //       return {
    //         id: movie.episode_id,
    //         title: movie.title,
    //         openingText: movie.opening_crawl,
    //         releaseDate: movie.release_date
    //       }
    //     })
    //     setMovies(moviesData);
    //   })
    //   .catch(error => setErrors(`Something went wrong. Error: ${error}`));

    // === Method 2: Async call
    try {
      const response = await fetch('https://swapi.dev/api/films');
      if (!response.ok) {
        throw new Error(`Something went wrong. Status code: ${response.status}`)
      }
      const data = await response.json();
      const moviesData = data.results.map(movie => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date
        }
      });
      setMovies(moviesData);
    }
    catch (error) {
      setErrors(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => { fetchMoviesHandler(); },[fetchMoviesHandler]);

  let content = !isLoading && movies.length > 0 ? <MoviesList movies={movies} /> :
    !isLoading && movies.length === 0 && !errors ? <p>No movies found.</p> :
    !isLoading && errors ? <p>{errors}</p> :
    <p>Loading...</p>


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
