import { useRouteMatch, NavLink } from 'react-router-dom';
import s from './MovieList.module.css';
// import { makeImagePath } from '../../functions/secondaryFunctions';

export default function MovieList({ movies }) {
  const { url } = useRouteMatch();

  return (
    <ul className={s.list}>
      {movies.map(movie => {
        // const posterPath = makeImagePath(movie.poster_path, 'w185');
        return (
          <li className={s.item} key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>
              {/* <div className={s.imageWrapper}>
                <img src={posterPath} alt={movie.title} width="100" />
              </div> */}
              <h3 className={s.title}>{movie.title}</h3>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
