import { HiLink } from 'react-icons/hi';
import s from './MovieDetails.module.css';
import { makeImagePath } from '../../functions/secondaryFunctions';

export default function MovieDetails({
  title,
  vote_average,
  homepage,
  genres,
  poster_path,
  backdrop_path,
  overview,
}) {
  const posterUrl = makeImagePath(poster_path);
  // const backdropUrl = makeImagePath(backdrop_path);
  return (
    <article className={s.article}>
      <div className={s.titleBlock}>
        <h2 className={s.movieTitle}>{title}</h2>

        <img className={s.image} src={posterUrl} alt={title} width="300" />
        <a href={homepage} target="_blank" rel="noreferrer">
          <HiLink />
        </a>
      </div>
      <div className={s.description}>
        <h3 className={s.title}>Genres: </h3>
        <ul className={s.genresList}>
          {genres &&
            genres.map((genre, idx) => <li key={idx}>{genre.name}</li>)}
        </ul>
        <h3 className={s.title}>Description:</h3>
        <p className={s.overview}>{overview}</p>

        <p className={s.voteText}>
          tmbd: <span className={s.vote}>{vote_average}</span>
        </p>
      </div>
    </article>
  );
}
