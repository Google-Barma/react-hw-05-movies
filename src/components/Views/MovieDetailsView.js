import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieDetails } from '../../services/tmdb-api';

export default function MovieDetails() {
  // const [movie, setMovie] = useState([]);

  const params = useParams();
  console.log(params);

  // fetchMovieDetails().then(setMovie);

  return <div>Movie Details</div>;
}
