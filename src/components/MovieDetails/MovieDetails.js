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
  const backdropUrl = makeImagePath(backdrop_path);
  return (
    <article>
      <div className={s.titleBlock}>
        <h2>{title}</h2>
        <span>tmbd vote {vote_average}</span>
        <img src={posterUrl} alt={title} width="300" />
        <a href={homepage} target="_blank" rel="noreferrer">
          <HiLink />
        </a>
      </div>
      <div className={s.desctioption}>
        <h3>Genres: </h3>
        {genres &&
          genres.map((genre, idx) => <span key={idx}>{genre.name}</span>)}
        <h3>Description:</h3>
        <p>{overview}</p>
      </div>
    </article>
  );
}
