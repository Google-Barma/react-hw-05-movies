import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HiLink } from 'react-icons/hi';
import s from './MovieDetailsView.module.css';
import { fetchMovieDetails } from '../../services/tmdb-api';
import { makeImagePath } from '../../functions/secondaryFunctions';

export default function MovieDetailsView() {
  const [movie, setMovie] = useState([]);

  const { movieId } = useParams();
  console.log(movie);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, []);

  const {
    title,
    vote_average,
    homepage,
    genres,
    poster_path,
    backdrop_path,
  } = movie;

  const posterUrl = makeImagePath(poster_path);
  const backdropUrl = makeImagePath(backdrop_path);

  return (
    <article>
      <div className={s.titleBlock}>
        <h2>{title}</h2>
        <span>{vote_average}</span>
        <img src={posterUrl} alt={title} width="300" />
        <a href={homepage} target="_blank" rel="noreferrer">
          <HiLink />
        </a>
      </div>
    </article>
  );
}
