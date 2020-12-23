import { Route, Switch } from 'react-router-dom';
import HomePage from './components/Views/HomeView';
import SearchMoviesPage from './components/Views/SearchMoviesView';
import AppBar from './components/AppBar/AppBar';
import MovieDetails from './components/Views/MovieDetailsView';

function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <SearchMoviesPage />
        </Route>

        <Route>
          <MovieDetails path="/movies/:movieId" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
