import s from './MovieList.module.css';
import { makeImagePath } from '../../functions/secondaryFunctions';

export default function MovieList({ movies }) {
  console.log(movies);
  return (
    <ul className={s.list}>
      {movies.map(movie => {
        const posterPath = makeImagePath(movie.poster_path, 'w185');
        return (
          <li className={s.item} key={movie.id}>
            <h3 className={s.title}>{movie.title}</h3>
            <div className={s.imageWrapper}>
              <img src={posterPath} alt={movie.title} width="100" />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
