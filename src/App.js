import { Route, Switch } from 'react-router-dom';
import HomeView from './components/Views/HomeView';
import SearchMoviesView from './components/Views/SearchMoviesView';
import AppBar from './components/AppBar/AppBar';
import MovieDetailsView from './components/Views/MovieDetailsView';

function App() {
  return (
    <>
      <AppBar />
      <Switch>
        {/* <Route path="/" exact>
          <HomeView />
        </Route> */}
        <Route path="/" exact component={HomeView} />
        <Route path="/movies" component={SearchMoviesView} />
        <Route path="/movies/:movieId" component={MovieDetailsView} />
        {/* <Route path="/movies">
          <SearchMoviesView />
        </Route> */}

        {/* <Route>
          <MovieDetailsView path="/movies/:movieId" />
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
