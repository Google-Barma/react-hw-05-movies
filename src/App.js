import {
  fetchTrandingMovie,
  fetchMovie,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
} from './services/tmdb-api';

function App() {
  return <div className="App">test</div>;
}

export default App;

fetchMovieReviews(531219).then(res => console.log(res));
