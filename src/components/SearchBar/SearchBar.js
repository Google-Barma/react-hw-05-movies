import { useState } from 'react';
import { IoSearchCircleSharp } from 'react-icons/io5';
import s from './SearchBar.module.css';
import { fetchMovie } from '../../services/tmdb-api';
import MovieList from '../MovieList/MovieList';

export default function SearchBar() {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    fetchMovie(value).then(setMovies);
  }

  return (
    <>
      <form className={s.form} onSubmit={e => handleSubmit(e)}>
        <input
          className={s.input}
          placeholder="input your query"
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className={s.button} disabled={!value} type="submit">
          <IoSearchCircleSharp color="#ff0000" size="30" />
        </button>
      </form>

      {movies && <MovieList movies={movies} />}
    </>
  );
}
