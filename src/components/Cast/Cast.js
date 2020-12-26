import { useState, useEffect } from 'react';
import { fetchMovieCredits } from '../../services/tmdb-api';
import { makeImagePath } from '../../functions/secondaryFunctions';
import s from './Cast.module.css';

export default function Cast({ movieId }) {
  const [actors, setActors] = useState([]);

  console.log(actors);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setActors);
  }, []);

  return (
    <ul className={s.list}>
      {actors.map(({ profile_path, name, id }) => {
        const imageUrl = makeImagePath(profile_path, 'w185');
        return (
          <li key={id}>
            <h2 className={s.title}>{name}</h2>
            <img src={imageUrl} alt={name} width="130" />
          </li>
        );
      })}
    </ul>
  );
}
