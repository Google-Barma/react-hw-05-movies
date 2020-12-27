import { useState, useEffect } from 'react';
import { fetchTrandingMovie } from '../../services/tmdb-api';
import MovieList from '../MovieList/MovieList';

export default function HomeView() {
  const [trandingMovie, setTrandingMovie] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchTrandingMovie().then(setTrandingMovie);
  }, []);

  return (
    <>
      <h1>Tranding Movies</h1>
      <MovieList movies={trandingMovie} />
    </>
  );
}
