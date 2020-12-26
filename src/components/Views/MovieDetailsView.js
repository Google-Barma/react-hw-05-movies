import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import s from './MovieDetails.module.css';
import { fetchMovieDetails } from '../../services/tmdb-api';
import MovieDetails from '../MovieDetails/MovieDetails';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

export default function MovieDetailsView() {
  const [movie, setMovie] = useState([]);

  const { movieId } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, []);

  return (
    <>
      <MovieDetails {...movie} />

      <NavLink to={`${url}/cast`} className={s.link}>
        Cast
      </NavLink>
      <NavLink to={`${url}/reviews`} className={s.link}>
        Reviews
      </NavLink>

      <Switch>
        <Route path={`${url}/cast`}>
          <Cast movieId={movieId} />
        </Route>

        <Route path={`${url}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Switch>
    </>
  );
}
